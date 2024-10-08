// h2タイトル
export interface TextListType {
    id: number;
    title: string;
    anchorlink: string;
}

export const TEXT_LIST: TextListType[] = [
    { id: 0, title: "Factor Xキャリアの特徴", anchorlink: "pointSection"},
    { id: 1, title: "ご利用料金について", anchorlink: "costSection"},
    { id: 2, title: "ご利用の流れ", anchorlink: "flowSection"},
    { id: 3, title: "登録人材・利用者の声", anchorlink: "dataVoiceSection"},
    { id: 4, title: "お問い合わせ", anchorlink: "contactSection"},
    { id: 5, title: "Factor X", anchorlink: "https://www.factorx.jp/"}
]

// Factor Xの特徴の画像
export interface PointImgType {
    id: number;
    img: string;
}

export const POINT_IMG: PointImgType[] = [
    { id: 0, img: "/point/factory.png"},
    { id: 1, img: "/point/person-care.png"},
    { id: 2, img: "/point/hearing.png"},
    { id: 3, img: "/point/matching.png"}
]

// Factor Xの特徴のタイトル
export interface PointTitleType {
    id: number;
    title: string;
}

export const POINT_TITLE_TEXT: PointTitleType[] = [
    { id: 0, title: "工場・製造業特化"},
    { id: 1, title: "求職者サポートが手厚い"},
    { id: 2, title: "求人募集・人材採用相談"},
    { id: 3, title: "紹介可能人材多数"}
]

// Factor Xの特徴のテキスト
export interface PointTextType {
    id: number;
    text: string;
}

export const POINT_TEXT: PointTextType[] = [
    { id: 0, text: "Factor Xキャリアは工場・製造業のための人材紹介サービスです。業界に精通した専門のエージェントが貴社の求人とマッチした適切な人材をご紹介いたします。"},
    { id: 1, text: "求職者の経験・スキル等の適性をしっかり把握するためにクオリティーの高い面談を実施。貴社の希望にピッタリの人材をご紹介することで採用後のミスマッチを防ぎます。"},
    { id: 2, text: "求人募集・人材採用に関するお悩みを専属のエージェントへお気軽にご相談いただけます。工場・製造業における採用課題解決の多くの成功事例に基づき、貴社のお悩み解決のご提案をいたします。"},
    { id: 3, text: "Factor Xキャリアには工場・製造業で働きたい人材、経験・スキルが豊富な人材が多数登録しております。貴社の希望に沿った人材をご紹介可能です。"}
]

// ご利用料金テキスト
export interface CostTextType {
    id: number;
    text: string;
}

export const COST_TEXT: CostTextType[] = [
    { id: 0, text: "Factor Xキャリアは、完全成果報酬型のサービスです。初期費用は一切不要なのでお気軽にご利用いただけます。"},
    { id: 1, text: "一般の求人掲載サイトとは異なり、求人掲載料は不要です。採用が決定するまで費用がかからないため、無駄なコストを削減させ効率的な採用活動が可能です。"},
    { id: 2, text: "採用後、早期退職が発生した場合は入社3か月まで紹介料の一部をご返金させていただきます。"}
]

// Factor Xの特徴の画像
export interface FlowImgType {
    id: number;
    img: string;
}

export const FLOW_IMG: FlowImgType[] = [
    { id: 0, img: "/flow/no1.png"},
    { id: 1, img: "/flow/no2.png"},
    { id: 2, img: "/flow/no3.png"},
    { id: 3, img: "/flow/no4.png"},
    { id: 4, img: "/flow/no5.png"},
    { id: 5, img: "/flow/no6.png"},
    { id: 6, img: "/flow/no7.png"},
    { id: 7, img: "/flow/no8.png"},
    { id: 8, img: "/flow/no9.png"},
]

// ご利用の流れカードタイトル
export interface FlowTitleType {
    id: number;
    title: string;
}

export const FLOW_TITLE: FlowTitleType[] = [
    { id: 0, title: "お問い合わせ"},
    { id: 1, title: "求人・採用ヒアリング"},
    { id: 2, title: "人材紹介契約"},
    { id: 3, title: "求人票作成"},
    { id: 4, title: "スカウト・求職者獲得"},
    { id: 5, title: "候補者紹介"},
    { id: 6, title: "選考"},
    { id: 7, title: "内定・入社"},
    { id: 8, title: "紹介料のお支払い"}
]

// ご利用の流れカードタイトル
export interface FlowTextType {
    id: number;
    text: string;
    text2?: string;
    text3?: string;
}

export const FLOW_TEXT: FlowTextType[] = [
    { id: 0, text: "まずは、", text2: "こちら", text3:"よりお気軽に必要事項をご入力の上お問い合わせください。お電話でのお問い合わせ（0569-21-5539)も可能です。"},
    { id: 1, text: "工場・製造業に精通した専属エージェントが貴社の求人募集・採用状況についてのヒアリングを行います。お悩みや課題など採用活動でのお困りごとをご相談ください。"},
    { id: 2, text: "Factor Xキャリアをご利用するにあたり人材紹介サービスに関する契約書を締結します。紹介料や秘密保持など契約内容の詳細をご確認ください。"},
    { id: 3, text: "ヒアリングの内容を基に貴社の求人・採用の課題を踏まえ、求職者にとって魅力的になるよう求人票を作成いたします。"},
    { id: 4, text: "工場・製造業に精通した専属エージェントが貴社の求める人材にマッチした登録求職者へ求人情報をご案内し、スカウトを行います。"},
    { id: 5, text: "応募意思のある候補者をご紹介いたします。専属のエージェントが候補者と面談をした際の情報も共有し、より具体的に経歴や人物像をイメージできるようサポートいたします。"},
    { id: 6, text: "貴社のフローに合わせて選考試験を行います。候補者との選考日程調整やその他ご連絡事項などは専属のエージェントが代行いたします。"},
    { id: 7, text: "採用が決定しましたら、入社に関わる手続きやその他のやり取りまで貴社と採用者の相互フォローをいたします。スムーズな入社が行えるようサポートをいたします。"},
    { id: 8, text: "採用者の入社後、紹介料をお支払いいただきます。万が一早期退職が発生した場合には、時期に応じて一部金額の返金をご対応いたします。"}
]

// グラフタイトル
export interface GraphTitleType {
    id: number;
    title: string;
}

export const GRAPH_TITLE: GraphTitleType[] = [
    {id: 0, title: "登録者年齢別の割合"},
    {id: 1, title: "登録者経験職種別の割合"},
]

// グラフ画像
export interface GraphImgType {
    id: number;
    img: string;
}

export const GRAPH_IMG: GraphImgType[] = [
    {id: 0, img: "/graph/age-graph.png"},
    {id: 1, img: "/graph/category-graph.png"},
]

// グラフテキスト
export interface GraphTextType {
    id: number;
    text: string;
}

export const GRAPH_TEXT: GraphTextType[] = [
    {id: 0, text: "20代から30代までの登録者が全体の約7割を占めています。またマネジメント経験のある管理職希望の人材も多数登録しております。貴社の未来を担う人材をご紹介可能です。"},
    {id: 1, text: "現場職だけでなく専門知識や技術、資格を持ち合わせたエンジニア職の人材も多数登録しております。貴社のご希望に沿った厳選された人材をご紹介可能です。"},
]

// 人物シルエット写真
export interface PersonPictureType {
    id: number;
    img: string;
}

export const PERSON_PICTURE: PersonPictureType[] = [
    { id: 0, img: "/voice/person1.png"},
    { id: 1, img: "/voice/person2.png"},
]

// 会社名
export interface CompanyNameType {
    id: number;
    text: string;
}

export const COMPANY_NAME: CompanyNameType[] = [
    {id: 0, text: "製造工業株式会社"},
    {id: 1, text: "株式会社 工場"},
]

// 所属部署
export interface DapertmentType {
    id: number;
    text: string;
}

export const DEPERTMENT_NAME: DapertmentType[] = [
    {id: 0, text: "総務部　人事課"},
    {id: 1, text: "人事部"},
]

// 氏名
export interface PersonNameType {
    id: number;
    text: string;
    text2: string;
}

export const PERSON_NAME: PersonNameType[] = [
    {id: 0, text: "半田　太郎", text2: "様"},
    {id: 1, text: "製造　花子", text2: "様"},
]

// コメント内容
export interface CommentType {
    id: number;
    text: string;
}

export const COMMENT: CommentType[] = [
    {id: 0, text: "利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。"},
    {id: 1, text: "利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。利用した企業のコメントがここには入ります。"},
]

//インタビュー質問
export interface QuestionType {
    id: number;
    text: string;
}

export const QUESTION: QuestionType[] = [
    {id: 0, text: "Factor Xキャリアを利用してどうだったかについて質問をしていく。Factor Xキャリアを利用してどうだったかについて質問をしていく。"},
    {id: 1, text: "Factor Xキャリアを利用してどうだったかについて質問をしていく。Factor Xキャリアを利用してどうだったかについて質問をしていく。"},
    {id: 2, text: "Factor Xキャリアを利用してどうだったかについて質問をしていく。Factor Xキャリアを利用してどうだったかについて質問をしていく。"},
    {id: 3, text: "Factor Xキャリアを利用してどうだったかについて質問をしていく。Factor Xキャリアを利用してどうだったかについて質問をしていく。"},
]

//インタビュー回答
export interface AnswerType {
    id: number;
    name: string;
    text: string;
}

export const ANSWER: AnswerType[] = [
    {id: 0, name: "半田様", text: "インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。"},
    {id: 1, name: "半田様", text: "インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。"},
    {id: 2, name: "半田様", text: "インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。"},
    {id: 3, name: "半田様", text: "インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。インタビューの質問に対しての応答のテキストがここに入る。"},
]

//フォーム
export interface FormType {
    id: string;
    label: string;
    label2?: string;
    placeholder: string;
    autoComplete?: string;
    register: "companyname" | "sendername" | "position" | "email" | "tel" | "content";
    isTextarea: boolean;
}

export const FORM: FormType[] = [
    {
        id: "companyName",
        label: "貴社名",
        placeholder: "貴社名を入力",
        autoComplete: "organization",
        register: "companyname",
        isTextarea: false,
      },
      {
        id: "senderName",
        label: "ご担当者名",
        placeholder: "ご担当者名を入力",
        autoComplete: "name",
        register: "sendername",
        isTextarea: false,
      },
      {
        id: "position",
        label: "部署名・役職名",
        placeholder: "部署名・役職名を入力",
        register: "position",
        isTextarea: false,
      },
      {
        id: "email",
        label: "メールアドレス",
        placeholder: "メールアドレスを入力",
        autoComplete: "email",
        register: "email",
        isTextarea: false,
      },
      {
        id: "tel",
        label: "電話番号",
        placeholder: "電話番号を入力",
        autoComplete: "tel",
        register: "tel",
        isTextarea: false, 
      },
      {
        id: "content",
        label: "お問い合わせ内容",
        label2: "(1000文字以内)",
        placeholder: "お問い合わせ内容を入力",
        register: "content",
        isTextarea: true,
      },
];

// footer見出し
export interface FooterTitleType {
    id: number;
    title: string;
}

export const FOOTER_TITLE: FooterTitleType[] = [
    { id: 0, title: "Factor Xキャリア"},
    { id: 1, title: "Factor X"}
]

// footerリンク
export interface FooterLinkType {
    id: number;
    text: string;
    text2?: string;
}

export const FOOTER_LINK: FooterLinkType[] = [
    { id: 0, text: "運営会社について"},
    { id: 1, text: "プライバシーポリシー"},
    { id: 2, text: "Factor X", text2: "－工場・製造業の人材・技術マッチング－"}
]

// submit送信完了・失敗
export interface SubmitType {
    id: number;
    status: string;
    title: string;
    img: string;
    altImg: string;
    text: string;
    text2: string;
}

export const SUBMIT: SubmitType[] = [
    { id: 0, status: "success", title: "送信完了", img: "/submit/okmark.png", altImg: "送信完了画像", text: "お問い合わせ受付を完了いたしました。", text2: "担当者よりご連絡を差し上げますので、しばらくお待ちくださいますようよろしくお願いいたします。"},
    { id: 1, status: "failed", title: "送信失敗", img: "/submit/ngmark.png", altImg: "送信失敗画像", text: "メッセージの送信に失敗しました。", text2: "大変お手数ですが、時間をおいてから再度お試しください。"}
]
