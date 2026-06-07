const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  LevelFormat, PageNumber, Header, Footer
} = require('/sessions/ecstatic-modest-thompson/docxwork/node_modules/docx');
const fs = require('fs');

const DARK_BLUE = "1F3864";
const MED_BLUE = "2E75B6";
const LIGHT_BLUE = "D6E4F0";
const RED = "C00000";
const LIGHT_GRAY = "F2F2F2";
const WHITE = "FFFFFF";
const DARK_GRAY = "404040";

const b = { style: BorderStyle.SINGLE, size: 1, color: "AAAAAA" };
const borders = { top: b, bottom: b, left: b, right: b };

function run(text, opts = {}) {
  return new TextRun({ text, size: 22, font: "Arial", ...opts });
}

function para(children, opts = {}) {
  return new Paragraph({
    spacing: { before: 80, after: 80 },
    alignment: AlignmentType.JUSTIFIED,
    ...opts,
    children: Array.isArray(children) ? children : [run(children)]
  });
}

function spacer() {
  return new Paragraph({ children: [run("")], spacing: { before: 60, after: 0 } });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 280, after: 140 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: MED_BLUE, space: 6 } },
    children: [new TextRun({ text, bold: true, size: 28, font: "Arial", color: DARK_BLUE })]
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 200, after: 100 },
    children: [new TextRun({ text, bold: true, size: 24, font: "Arial", color: MED_BLUE })]
  });
}

function clauseBox(ref, page, textEN, traductionFR, interpretation) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      // Header
      new TableRow({ children: [new TableCell({
        borders, width: { size: 9360, type: WidthType.DXA },
        shading: { fill: DARK_BLUE, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 160, right: 160 },
        children: [new Paragraph({ children: [
          new TextRun({ text: ref, bold: true, size: 24, font: "Arial", color: WHITE }),
          new TextRun({ text: "     |     Page du contrat : " + page, size: 20, font: "Arial", color: "AACCFF" }),
        ]})]
      })] }),
      // Texte original
      new TableRow({ children: [new TableCell({
        borders, width: { size: 9360, type: WidthType.DXA },
        shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 160, right: 160 },
        children: [
          new Paragraph({ children: [run("Texte original (anglais) :", { bold: true, size: 20, color: DARK_GRAY })] }),
          new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { before: 60, after: 0 },
            children: [run('"' + textEN + '"', { italics: true, size: 20, color: "333333" })] })
        ]
      })] }),
      // Traduction
      new TableRow({ children: [new TableCell({
        borders, width: { size: 9360, type: WidthType.DXA },
        shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 160, right: 160 },
        children: [
          new Paragraph({ children: [run("Traduction (français) :", { bold: true, size: 20, color: DARK_BLUE })] }),
          new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { before: 60, after: 0 },
            children: [run(traductionFR, { size: 20 })] })
        ]
      })] }),
      // Interprétation
      new TableRow({ children: [new TableCell({
        borders, width: { size: 9360, type: WidthType.DXA },
        shading: { fill: "FFF8E1", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 160, right: 160 },
        children: [
          new Paragraph({ children: [run("Interpretation et application au cas Nyanza :", { bold: true, size: 20, color: RED })] }),
          new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { before: 60, after: 0 },
            children: [run(interpretation, { size: 20 })] })
        ]
      })] }),
    ]
  });
}

function redBox(text) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({ children: [new TableCell({
      borders: {
        top: { style: BorderStyle.THICK, size: 8, color: RED },
        bottom: { style: BorderStyle.THICK, size: 8, color: RED },
        left: { style: BorderStyle.THICK, size: 8, color: RED },
        right: { style: BorderStyle.THICK, size: 8, color: RED },
      },
      shading: { fill: "FDECEA", type: ShadingType.CLEAR },
      margins: { top: 160, bottom: 160, left: 200, right: 200 },
      children: [new Paragraph({ alignment: AlignmentType.JUSTIFIED,
        children: [run(text, { size: 22, bold: true, color: RED })] })]
    })] })]
  });
}

function quoteBox(label, quote, traduction) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [new TableRow({ children: [new TableCell({
      borders: {
        top: { style: BorderStyle.SINGLE, size: 4, color: RED },
        bottom: { style: BorderStyle.SINGLE, size: 4, color: RED },
        left: { style: BorderStyle.THICK, size: 12, color: RED },
        right: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" },
      },
      shading: { fill: "FFF3F3", type: ShadingType.CLEAR },
      margins: { top: 100, bottom: 100, left: 180, right: 180 },
      children: [
        new Paragraph({ children: [run(label, { bold: true, size: 20, color: RED })] }),
        new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { before: 60, after: 40 },
          children: [run('"' + quote + '"', { italics: true, size: 22, color: "333333" })] }),
        new Paragraph({ alignment: AlignmentType.JUSTIFIED,
          children: [run("=> " + traduction, { size: 20, bold: true, color: DARK_BLUE })] }),
      ]
    })] })]
  });
}

const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: DARK_BLUE },
        paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: MED_BLUE },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "-",
        alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 640, hanging: 320 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1100, right: 1100, bottom: 1100, left: 1100 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: MED_BLUE, space: 4 } },
        children: [new TextRun({ text: "WASAC Development Ltd  |  NOTE JURIDIQUE CONFIDENTIELLE  |  Responsabilite du Design - Nyanza Dumpsite", size: 18, font: "Arial", color: DARK_BLUE })]
      })] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        border: { top: { style: BorderStyle.SINGLE, size: 4, color: MED_BLUE, space: 4 } },
        children: [
          run("Contrat N deg 11.07.053/514/W/Ss/24-25/Proc-WASAC-MD/fs  |  Page ", { size: 18, color: DARK_GRAY }),
          new TextRun({ children: [PageNumber.CURRENT], size: 18, font: "Arial", color: DARK_GRAY }),
          run(" / ", { size: 18, color: DARK_GRAY }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], size: 18, font: "Arial", color: DARK_GRAY }),
        ]
      })] })
    },
    children: [

      // ── TITRE ──────────────────────────────────────────────────────────────
      new Table({
        width: { size: 9360, type: WidthType.DXA }, columnWidths: [9360],
        rows: [new TableRow({ children: [new TableCell({
          borders: {
            top: { style: BorderStyle.THICK, size: 12, color: DARK_BLUE },
            bottom: { style: BorderStyle.THICK, size: 12, color: MED_BLUE },
            left: { style: BorderStyle.THICK, size: 12, color: DARK_BLUE },
            right: { style: BorderStyle.THICK, size: 12, color: DARK_BLUE },
          },
          shading: { fill: DARK_BLUE, type: ShadingType.CLEAR },
          margins: { top: 400, bottom: 400, left: 400, right: 400 },
          children: [
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "WASAC DEVELOPMENT LTD", bold: true, size: 28, font: "Arial", color: WHITE })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 80 }, children: [new TextRun({ text: "Projet NDUBA - Kigali Municipal Solid Waste Management Facilities", size: 20, font: "Arial", color: "AACCEE" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "NOTE JURIDIQUE ET CONTRACTUELLE", bold: true, size: 36, font: "Arial", color: "FFD700" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "CONFIDENTIELLE - USAGE INTERNE", bold: true, size: 20, font: "Arial", color: "FF9999" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200, after: 80 },
              border: { top: { style: BorderStyle.SINGLE, size: 4, color: "3399FF", space: 8 } },
              children: [new TextRun({ text: "Objet : Responsabilite de la Conception des Travaux de Remediation du Site de Nyanza", bold: true, size: 24, font: "Arial", color: "CCEEFF" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 80 }, children: [new TextRun({ text: "Ref. Verbal Instruction N deg 2 - Mota-Engil (04 juin 2026)", size: 20, font: "Arial", color: "AADDAA" })] }),
            new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 160, after: 0 }, children: [new TextRun({ text: "Date : 04 juin 2026  |  Contrat N deg 11.07.053/514/W/Ss/24-25/Proc-WASAC-MD/fs", size: 20, font: "Arial", color: "CCCCCC" })] }),
          ]
        })] })]
      }),

      spacer(), spacer(),

      // ── 1. CONTEXTE ───────────────────────────────────────────────────────
      h1("1.  CONTEXTE ET QUESTION POSEE"),

      para([
        run("Dans sa "), run("Verbal Instruction N deg 2 du 2 juin 2026", { bold: true }),
        run(", Mota-Engil affirme que la "),
        run("conception detaillee (plans, specifications techniques, niveaux)", { bold: true }),
        run(" des travaux de remediation de Nyanza - notamment l'Item 4.0 « Repair and Leveling of Dirt Road » - "),
        run("n'est pas de sa responsabilite contractuelle", { bold: true, color: RED }),
        run(", et que ces documents doivent etre fournis par l'Employeur (WASAC) et/ou l'Ingenieur (CES). Le Contractant cite les Clauses 1.2.1, 1.3, 2.4.1 et 7.1 du Contrat."),
      ]),
      spacer(),
      para([
        run("La presente note demontre, "),
        run("preuves contractuelles et documentaires a l'appui", { bold: true }),
        run(", que cette position est "),
        run("juridiquement fondee", { bold: true, color: RED }),
        run(". WASAC doit comprendre pourquoi elle ne peut pas rejeter cet argument et doit agir pour debloquer la situation."),
      ]),

      spacer(), spacer(),

      // ── 2. ARGUMENT STRUCTUREL ────────────────────────────────────────────
      h1("2.  ARGUMENT STRUCTUREL FONDAMENTAL : DEUX PERIMETRES DISTINCTS"),

      para([
        run("Le titre du projet est : "),
        run("« Phase I : Design and Build of Nduba Sanitary Landfill and Auxiliary Facilities »", { bold: true, italics: true }),
        run(". Cette formulation est decisive : l'obligation de conception (design) du Contractant concerne "),
        run("Nduba", { bold: true, color: MED_BLUE }),
        run(", pas Nyanza. Le BoQ Chapitre III (Nyanza, $498,557) est un BoQ d'"),
        run("execution pure", { bold: true }),
        run(" : il ne contient aucun poste de conception, aucune ligne d'ingenierie, aucun honoraire d'etude."),
      ]),

      spacer(),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: MED_BLUE, type: ShadingType.CLEAR },
              margins: { top: 100, bottom: 100, left: 160, right: 160 }, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NDUBA (Chapitres I & II)", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
            new TableCell({ borders, shading: { fill: RED, type: ShadingType.CLEAR },
              margins: { top: 100, bottom: 100, left: 160, right: 160 }, width: { size: 4680, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "NYANZA (Chapitre III + VO#04)", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: LIGHT_BLUE, type: ShadingType.CLEAR },
              margins: { top: 100, bottom: 100, left: 160, right: 160 }, width: { size: 4680, type: WidthType.DXA },
              children: [
                para("Contrat Design & Build"),
                para([run("Le Contractant est responsable de la CONCEPTION et de la CONSTRUCTION du nouveau centre d'enfouissement.")]),
                para([run("DESIGN INCLUS dans le BoQ", { bold: true, color: "006600" })]),
              ] }),
            new TableCell({ borders, shading: { fill: "FFF3F3", type: ShadingType.CLEAR },
              margins: { top: 100, bottom: 100, left: 160, right: 160 }, width: { size: 4680, type: WidthType.DXA },
              children: [
                para("Contrat d'execution pure"),
                para("Le BoQ contient uniquement des postes d'execution. Plusieurs items precisent : « All works will be executed as per detailed drawings » (les plans doivent etre fournis)."),
                para([run("AUCUN POSTE DE DESIGN dans le BoQ Nyanza", { bold: true, color: RED })]),
              ] }),
          ]}),
        ]
      }),

      spacer(),

      para([
        run("Principe juridique fondamental : "),
        run("si le Contractant etait responsable du design de Nyanza, cette prestation serait dans son BoQ avec un prix. Elle n'y est pas.", { bold: true }),
        run(" On ne peut pas imposer une obligation non contractualisee."),
      ]),

      spacer(), spacer(),

      // ── 3. CLAUSES DU CONTRAT ─────────────────────────────────────────────
      h1("3.  ANALYSE CLAUSE PAR CLAUSE DU CONTRAT SIGNE"),

      para("Les clauses ci-dessous sont extraites du Contrat signe le 26 aout 2024. Chacune est reproduite en anglais (texte original), traduite en francais, et interpretee dans le contexte precis du litige Nyanza."),

      spacer(), spacer(),

      h2("3.1   Clause GC 2.1.1 - Scope of Facilities (Perimetre des Installations)"),
      spacer(),
      clauseBox(
        "CLAUSE GC 2.1.1 - Scope of Facilities",
        "17",
        "Unless otherwise expressly limited in the Employer's Requirements, the Contractor's obligations cover the provision of all Plant and the performance of all Installation Services required for the design [...] in accordance with the plans, procedures, specifications, drawings, codes and any other documents as specified in Section VI, Employer's Requirements [...] except for those supplies, works and services that will be provided or performed by the Employer, as set forth in the Appendix to the Contract Agreement titled Scope of Works and Supply by the Employer.",
        "Sauf limitation expresse dans les Exigences de l'Employeur, les obligations du Contractant couvrent la fourniture de toutes les Installations et l'execution de tous les Services [...] conformement aux plans, procedures, specifications, dessins et codes specifies dans la Section VI, Exigences de l'Employeur [...] A L'EXCEPTION des fournitures, travaux et services qui seront fournis ou executes par l'Employeur, tels que definis dans l'Appendice intitule : Perimetre des Travaux et Fournitures par l'Employeur.",
        "DEUX EXCEPTIONS CRITIQUES dans cette clause : (1) l'obligation du Contractant est definie PAR les Exigences de l'Employeur (Section VI) - et ces exigences ne demandent pas au Contractant de concevoir les travaux de Nyanza ; (2) la clause exclut explicitement les travaux et fournitures que l'Employeur prend en charge. Les documents de conception pour Nyanza font partie de ces fournitures exclues du perimetre du Contractant."
      ),

      spacer(), spacer(),

      h2("3.2   Clause GC 2.3.1 - Contractor's Responsibilities (Responsabilites du Contractant)"),
      spacer(),
      clauseBox(
        "CLAUSE GC 2.3.1 - Contractor's Responsibilities",
        "18",
        "The Contractor shall design, build, manufacture including associated purchases and/or subcontracting, install and complete the Facilities in accordance with the Contract.",
        "Le Contractant doit concevoir, construire, fabriquer, installer et completer les Installations conformement au Contrat.",
        "Cette clause etablit l'obligation generale de 'design' du Contractant. MAIS le terme 'Facilities' (Installations) designe, dans le contrat, le nouveau centre d'enfouissement de Nduba. La remediation de Nyanza est un perimetre additionnel integre via le BoQ Chapitre III, qui est un BoQ d'execution pure sans prestation de design. La Clause 2.3.1 s'applique a Nduba, pas a Nyanza. Un contrat s'interprete dans son ensemble : une clause generale ne peut pas creer une obligation que le BoQ specifique exclut implicitement en n'y prevoyant aucun poste de conception."
      ),

      spacer(), spacer(),

      h2("3.3   Clause GC 2.4.1 - Employer's Responsibilities [CLAUSE CLE - PREUVE DIRECTE]"),
      spacer(),
      clauseBox(
        "CLAUSE GC 2.4.1 - Employer's Responsibilities  [PREUVE DIRECTE]",
        "19",
        "All information and/or data to be supplied by the Employer as described in the Appendix to the Contract Agreement titled Scope of Works and Supply by the Employer, shall be deemed to be accurate, except when the Employer expressly states otherwise.",
        "Toutes les informations et/ou donnees devant etre fournies par l'Employeur, telles que decrites dans l'Appendice intitule 'Perimetre des Travaux et Fournitures par l'Employeur', seront reputees exactes, sauf indication expresse contraire de l'Employeur.",
        "PREUVE DIRECTE : Cette clause etablit expressement que c'est L'EMPLOYEUR (WASAC) qui est responsable de la fourniture des informations et donnees necessaires a l'execution. Pour les travaux de Nyanza, cela inclut les plans d'execution, les specifications techniques, les niveaux et coordonnees. Mota-Engil invoque exactement cette clause dans sa Verbal Instruction N deg 2 - et elle a raison de le faire. Le Contractant a le droit contractuel d'exiger ces documents avant de commencer les travaux."
      ),

      spacer(), spacer(),

      h2("3.4   Clause GC 2.4.5 - Employer's Responsibilities (suite)"),
      spacer(),
      clauseBox(
        "CLAUSE GC 2.4.5 - Employer's Responsibilities",
        "19",
        "Unless otherwise agreed upon by the Employer and the Contractor, the Employer shall provide sufficiently qualified operating and maintenance personnel; shall supply and make available all raw materials, utilities [...] other materials and facilities; and shall perform all work and services of whatsoever nature, including those specified in the Appendix to the Contract Agreement titled Scope of Works and Supply by the Employer.",
        "Sauf accord contraire, l'Employeur fournira le personnel qualifie, les matieres premieres, les materiaux et installations necessaires ; et executera tous les travaux et services de toute nature, y compris ceux specifies dans l'Appendice 'Perimetre des Travaux et Fournitures par l'Employeur'.",
        "Cette clause confirme le role actif de l'Employeur dans la fourniture des ressources necessaires. Les documents de conception constituent des 'donnees necessaires a l'execution' relevant de la responsabilite de l'Employeur pour Nyanza. Sans accord contractuel contraire stipulant que le Contractant prend en charge le design de Nyanza, c'est WASAC qui doit fournir ces documents."
      ),

      spacer(), spacer(),

      h2("3.5   Clause GC 6.2.2(c) - Responsabilite de l'Employeur pour ses propres designs"),
      spacer(),
      clauseBox(
        "CLAUSE GC 6.2.2(c) - Care of Facilities / Employer's Risk",
        "52",
        "(c) any use of or reliance upon any design, data or specification provided or designated by or on behalf of the Employer, or any such matter for which the Contractor has disclaimed responsibility herein.",
        "(c) Toute utilisation ou dependance a l'egard d'un design, de donnees ou de specifications fournis ou designes par l'Employeur ou en son nom, ou toute question pour laquelle le Contractant a decline sa responsabilite dans le present Contrat.",
        "ARGUMENT DECISIF : Cette clause reconnait explicitement que des designs peuvent etre fournis PAR L'EMPLOYEUR, et que dans ce cas l'Employeur en assume la responsabilite. Le fait que cette clause existe dans le contrat prouve que le schema contractuel prevoit que l'Employeur puisse etre fournisseur de designs - ce qui est precisement le cas pour Nyanza. De plus, la clause protege le Contractant qui a 'disclaimed responsibility' pour la conception de Nyanza : ce declain est contractuellement valide."
      ),

      spacer(), spacer(),

      h2("3.6   Clause GC 7.1 - Change in the Facilities [CLAUSE INVOQUEE PAR MOTA-ENGIL]"),
      spacer(),
      clauseBox(
        "CLAUSE GC 7.1 - Change in the Facilities",
        "62",
        "The Employer shall have the right to propose, and subsequently require, that the Project Manager order the Contractor from time to time during the performance of the Contract to make any change [...] Under this clause, any change to the Contract scope must be formalized through a Change Order issued by the Project Manager, including agreement on cost and time implications.",
        "L'Employeur aura le droit de proposer et d'exiger que le Chef de Projet ordonne au Contractant d'apporter toute modification au perimetre du Contrat [...] En vertu de cette clause, toute modification du perimetre doit etre formalisee par un Ordre de Modification emis par le Chef de Projet, incluant un accord sur les implications de cout et de delai.",
        "Si WASAC voulait imposer au Contractant une obligation de design non prevue dans le BoQ de Nyanza, cela constituerait un CHANGEMENT DE PERIMETRE qui exigerait un Change Order signe. Sans ce Change Order, WASAC ne peut pas imposer cette obligation. Cette clause protege aussi WASAC a l'avenir : si de nouveaux travaux sont instruits (comme c'est le cas avec l'instruction du 02/06/2026), ils doivent etre formalises par ecrit avec accord sur les couts et les delais."
      ),

      spacer(), spacer(),

      h2("3.7   Clause GC 1.3 - Communications [CLAUSE INVOQUEE PAR MOTA-ENGIL]"),
      spacer(),
      clauseBox(
        "CLAUSE GC 1.3 - Communications",
        "Contrat Art. 4 / GC 1.3",
        "In accordance with Clause 1.3 [Communications] of the Contract, all instructions, notices, and approvals shall be issued in writing and delivered through agreed communication means.",
        "Conformement a la Clause 1.3 du Contrat, toutes les instructions, avis et approbations doivent etre emis par ecrit et transmis par les moyens de communication convenus.",
        "Le Contractant demande la confirmation ecrite de l'instruction verbale du 02/06/2026 - c'est une demande legitime et obligatoire selon cette clause. WASAC (via CES) doit imperativement repondre par ecrit pour : (1) confirmer l'instruction, (2) preciser la nature de l'instruction (execution dans le cadre du VO#04 existant, sans nouveau Change Order), et (3) annoncer la fourniture imminente des plans de conception par CES."
      ),

      spacer(), spacer(),

      // ── 4. PREUVES DOCUMENTAIRES ──────────────────────────────────────────
      h1("4.  PREUVES DOCUMENTAIRES COMPLEMENTAIRES"),

      spacer(),

      h2("4.1   VO#04 approuve par WASAC (01 avril 2025) - ADMISSION EXPRESSE"),

      para([
        run("Le document le plus probant est le "),
        run("VO#04 signe par Dominique MUREKEZI, Directeur General par interim de WASAC, le 1er avril 2025", { bold: true }),
        run(". Au point 5, il est stipule :"),
      ]),

      spacer(),

      quoteBox(
        "VO#04 - Point 5 (signe WASAC, 01/04/2025) :",
        "5. Authorized Price: To be determined based on final scope of work after detailed designs.",
        "Prix Autorise : A determiner sur la base du perimetre final des travaux apres les designs detailles."
      ),

      spacer(),

      para([
        run("Cette formulation est une "),
        run("ADMISSION EXPRESSE DE WASAC", { bold: true, color: RED }),
        run(" : au moment de l'approbation du VO#04, les designs detailles n'existaient pas et devaient etre produits. WASAC n'a pas exige que le Contractant produise ces designs - il a conditionne le prix final a leur reception. "),
        run("Cela confirme sans ambiguite que les designs relèvent du cote Employeur/Ingenieur.", { bold: true }),
      ]),

      spacer(), spacer(),

      h2("4.2   Note Technique GEG (fevrier 2025) - Conception Conceptuelle uniquement"),

      para([
        run("La note technique GEG (ref. NSL_CD_000_GEN_TN_0003_R00) est explicitement intitulee "),
        run('"Conceptual Design"', { bold: true, italics: true }),
        run(" et non 'Detailed Design'. Elle conclut elle-meme :"),
      ]),

      spacer(),

      quoteBox(
        "Note Technique GEG - Conclusion (page 3/3) :",
        "However, for the development of these studies, additional information regarding the existing conditions would be required, in order for the project to be more detailed, as well as coherent and consistent.",
        "Cependant, pour le developpement de ces etudes, des informations supplementaires sur les conditions existantes seraient necessaires afin que le projet soit plus detaille, coherent et consistant."
      ),

      spacer(),

      para([
        run("La GEG elle-meme reconnait que son travail est insuffisant pour constituer des documents d'execution. "),
        run("Aucun plan d'execution detaille (cotes, niveaux, coordonnees) n'a jamais ete fourni au Contractant pour les travaux de Nyanza.", { bold: true }),
        run(" C'est la raison pour laquelle Mota-Engil ne peut pas executer sans ces documents."),
      ]),

      spacer(), spacer(),

      h2("4.3   BoQ VO#04-Rev.6 - Absence totale de postes de conception"),

      para("L'examen du BoQ contractuel (Chapitre III) et du VO#04-Rev.6 revele que TOUS les postes sont des postes d'execution, et que plusieurs d'entre eux precisent explicitement :"),

      spacer(),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2200, 4860, 2300],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: DARK_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, width: { size: 2200, type: WidthType.DXA },
              children: [new Paragraph({ children: [run("Item BoQ", { bold: true, color: WHITE, size: 20 })] })] }),
            new TableCell({ borders, shading: { fill: DARK_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, width: { size: 4860, type: WidthType.DXA },
              children: [new Paragraph({ children: [run("Description", { bold: true, color: WHITE, size: 20 })] })] }),
            new TableCell({ borders, shading: { fill: DARK_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, width: { size: 2300, type: WidthType.DXA },
              children: [new Paragraph({ children: [run("Design inclus ?", { bold: true, color: WHITE, size: 20 })] })] }),
          ]}),
          ...[
            ["III-604 / VO4-4.1", "Repair and levelling of dirt road (883m @ $67.13/m = $59,276) - item instruite le 02/06/2026", "NON - execution uniquement"],
            ["VO4-2.1.1", "Box-Culvert U-Shape - 'All works as per detailed drawings'", "NON - plans requis"],
            ["VO4-2.2.1", "Concrete drain pipe - 'All works as per detailed drawings'", "NON - plans requis"],
            ["VO4-3.1/3.2", "Slope base retaining / Rip-Rap - 'as per detailed drawing'", "NON - plans requis"],
            ["Chap. I & II (Nduba)", "Design and Build - Nduba Sanitary Landfill", "OUI - design inclus"],
          ].map(([item, desc, design]) => new TableRow({ children: [
            new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, width: { size: 2200, type: WidthType.DXA },
              children: [new Paragraph({ children: [run(item, { size: 18 })] })] }),
            new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, width: { size: 4860, type: WidthType.DXA },
              children: [new Paragraph({ children: [run(desc, { size: 18 })] })] }),
            new TableCell({ borders, shading: { fill: design.includes("OUI") ? "E8F5E9" : "FDECEA", type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, width: { size: 2300, type: WidthType.DXA },
              children: [new Paragraph({ children: [run(design, { size: 18, bold: true, color: design.includes("OUI") ? "006600" : RED })] })] }),
          ]}))
        ]
      }),

      spacer(), spacer(),

      // ── 5. RECOMMANDATIONS ────────────────────────────────────────────────
      h1("5.  RECOMMANDATIONS POUR WASAC"),

      spacer(),

      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [500, 1200, 7660],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders, shading: { fill: DARK_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 80, right: 80 }, width: { size: 500, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run("#", { bold: true, color: WHITE, size: 20 })] })] }),
            new TableCell({ borders, shading: { fill: DARK_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 80, right: 80 }, width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ children: [run("Priorite", { bold: true, color: WHITE, size: 20 })] })] }),
            new TableCell({ borders, shading: { fill: DARK_BLUE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 80, right: 80 }, width: { size: 7660, type: WidthType.DXA },
              children: [new Paragraph({ children: [run("Action requise", { bold: true, color: WHITE, size: 20 })] })] }),
          ]}),
          ...[
            ["1", "URGENT", "FDECEA", RED, "Confirmer par ecrit l'instruction verbale du 02/06/2026 au Contractant (obligation Clause 1.3). Preciser que l'item est couvert par le VO#04 existant (Item 4.1, 883m @ $67.13 = $59,276) et ne constitue pas un nouveau changement de scope."],
            ["2", "URGENT", "FDECEA", RED, "Demander immediatement a CES (Fekade Desta) d'emettre les documents de conception pour l'Item 4.0 : plans d'execution cotes, profils en long et en travers, niveaux NGF, specifications techniques. C'est la responsabilite de CES en tant qu'Ingenieur."],
            ["3", "IMPORTANT", "FFF3CD", "885500", "NE PAS tenter d'imposer au Contractant l'obligation de produire le design de Nyanza : cela n'est pas dans son BoQ contractuel. Toute tentative en ce sens exposerait WASAC a une reclamation fondee sur la Clause 7.1 (changement de scope non formalise)."],
            ["4", "IMPORTANT", "FFF3CD", "885500", "Consigner la note technique GEG et le VO#04 approuve comme preuves que le design n'a pas ete fourni. Ces documents protegent WASAC en cas de reclamation ulterieure du Contractant pour retard imputable a l'absence de plans."],
            ["5", "PREVENTION", LIGHT_BLUE, DARK_BLUE, "Pour tout travail futur a Nyanza, s'assurer que CES produit et transmet les plans AVANT d'instruire le Contractant, afin d'eviter des situations similaires."],
          ].map(([n, prio, bg, col, action]) => new TableRow({ children: [
            new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 80, right: 80 }, width: { size: 500, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run(n, { bold: true, size: 22 })] })] }),
            new TableCell({ borders, shading: { fill: bg, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 80, right: 80 }, width: { size: 1200, type: WidthType.DXA },
              children: [new Paragraph({ children: [run(prio, { bold: true, size: 20, color: col })] })] }),
            new TableCell({ borders, shading: { fill: LIGHT_GRAY, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 120, right: 120 }, width: { size: 7660, type: WidthType.DXA },
              children: [new Paragraph({ alignment: AlignmentType.JUSTIFIED, children: [run(action, { size: 20 })] })] }),
          ]}))
        ]
      }),

      spacer(), spacer(),

      // ── 6. CONCLUSION ─────────────────────────────────────────────────────
      h1("6.  CONCLUSION FERME"),

      spacer(),

      redBox(
        "CONCLUSION : Sur la base de l'analyse du Contrat signe le 26/08/2024 et des documents associes, la conception detaillee des travaux de remediation de Nyanza (plans, specifications, niveaux) EST DE LA RESPONSABILITE DE L'EMPLOYEUR (WASAC) ET DE L'INGENIEUR (CES), et non du Contractant (Mota-Engil). Cette conclusion repose sur cinq preuves convergentes : (1) absence totale de postes de conception dans le BoQ Nyanza - Clause GC 2.1.1 ; (2) responsabilite explicite de l'Employeur pour les donnees et documents - Clause GC 2.4.1 (p.19) ; (3) responsabilite de l'Employeur pour ses propres designs - Clause GC 6.2.2(c) (p.52) ; (4) admission expresse de WASAC dans le VO#04 approuve : prix 'to be determined after detailed designs' ; (5) Note Technique GEG = conception conceptuelle uniquement, insuffisante pour l'execution."
      ),

      spacer(), spacer(),

      para([
        run("Prepare par : ", { bold: true }),
        run("Hamdi - Coordinateur WASAC"),
        run("     |     Date : 04 juin 2026", { bold: true }),
      ]),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync('/sessions/ecstatic-modest-thompson/mnt/averse/Note_Juridique_Design_Nyanza.docx', buf);
  console.log('OK');
}).catch(e => { console.error(e.message); process.exit(1); });
