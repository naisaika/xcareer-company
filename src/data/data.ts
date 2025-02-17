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

//topアピールポイント
export interface TopCheckPointType {
    id: number;
    text: string;
}

export const PR_POINTS: TopCheckPointType[] = [
    { id: 0, text: "求人募集・人材採用・定着までサポート！"},
    { id: 1, text: "採用工数削減！迅速な人材確保支援"},
    { id: 2, text: "急な人手不足もお任せ！最適人材をご紹介"},
]

// Factor Xの特徴の画像
export interface PointImgType {
    id: number;
    img: string;
}

export const POINT_IMG: PointImgType[] = [
    { id: 0, img: "https://www.factorx.jp/xcareercompany/assets/point/factory.jpg"},
    { id: 1, img: "https://www.factorx.jp/xcareercompany/assets/point/hearing.jpg"},
    { id: 2, img: "https://www.factorx.jp/xcareercompany/assets/point/matching.jpg"},
    { id: 3, img: "https://www.factorx.jp/xcareercompany/assets/point/person-care.jpg"}
]

// Factor Xの特徴のタイトル
export interface PointTitleType {
    id: number;
    title: string;
}

export const POINT_TITLE_TEXT: PointTitleType[] = [
    { id: 0, title: "現場を熟知した人材紹介"},
    { id: 1, title: "求人募集・採用課題を共に解決"},
    { id: 2, title: "製造業目線の寄り添い支援"},
    { id: 3, title: "早期離職防止の人材定着サポート"}
]

// Factor Xの特徴のテキスト
export interface PointTextType {
    id: number;
    text: string;
    text2: string;
    text3: string;
    text4: string;
}

export const POINT_TEXT: PointTextType[] = [
    { 
        id: 0, 
        text: "Factor Xキャリアは、製造業の企業が運営する人材紹介サービスです。",
        text2: "同じ業界だからこそ、製造業特有の採用課題を深く理解し、求める人材を的確に把握できます。",
        text3: "「技術スキル」「職場環境への適応力」 など、現場で求められる要素を熟知した専門エージェントが貴社の課題やニーズに合わせ、最適な人材をご紹介します。",
        text4: "スキルだけでなく、長く活躍できる人材との出会いをサポートいたします。"
    },
    { 
        id: 1, 
        text: "Factor Xキャリアでは、貴社の採用課題を迅速に把握し、採用成功へと導くサポートを提供しております。",
        text2: "製造業における採用課題解決の豊富な成功事例に基づき、貴社のお悩みに合わせた最適な対策をご提案。",
        text3: "「求人票の条件が求職者に伝わりにくい」「採用基準をどう設定すればいいかわからない」 など、企業ごとの課題に寄り添い、採用戦略のアドバイスやプロセスの見直しまで徹底サポート。",
        text4: "専属エージェントが貴社の採用活動を支え、成功率の高い人材採用を実現します。"
    },
    { 
        id: 2, 
        text: "Factor Xキャリアは、製造業の企業が運営する人材紹介サービスだからこそ、現場のリアルな課題を素早く把握し、貴社の採用に寄り添います。",
        text2: "「急な欠員が出た」「専門スキルを持った人材がほしい」「未経験でも長く働ける人材を確保したい」など、製造業特有の採用課題にスピーディーに対応。",
        text3: "同じ製造業の視点を持つエージェントが貴社の悩みに共感しながら、実情に合った人材採用をしっかりとサポート。",
        text4: "「どんな人材が合うのか？」を一緒に考え、貴社の事業成長を支える最適な人材をご紹介いたします。"
    },
    { 
        id: 3, 
        text: "Factor Xキャリアは、単に人材を紹介するだけではなく、入社後の定着までを見据えたトータルサポートを提供しています。",
        text2: "採用者が「この会社なら安心して働ける！」 と思えるよう、貴社の社風・働き方・現場の雰囲気まで考慮した人材をご紹介。",
        text3: "入社後のフォローアップも実施し、早期離職を防ぐためのアフターサポートを充実させています。",
        text4: "定着率の高い人材採用を実現し、貴社の成長を支えます。"
    },
]

//コストアピールポイント
export interface CostCheckPointType {
    id: number;
    text: string;
}

export const COST_POINTS: CostCheckPointType[] = [
    { id: 0, text: "初期費用0円！"},
    { id: 1, text: "求人掲載料0円！"},
    { id: 2, text: "早期退職による返金あり！"},
]

// ご利用料金テキスト
export interface CostTextType {
    id: number;
    text: string;
    text2: string;
    text3: string;
    text4?: string;
}

export const COST_TEXT: CostTextType[] = [
    { 
        id: 0, 
        text: "Factor Xキャリアは、完全成果報酬型のサービスです。",
        text2: "初期費用は一切不要！",
        text3: "「まずは試してみたい」という場合もお気軽にご利用いただけます。",
    },
    { 
        id: 1, 
        text: "一般の求人サイトと違い、「求人掲載による費用」は発生しません。",
        text2: "無駄なコストを削減しながら採用活動可能です。",
        text3: "「求人を出しても応募が少なく、費用対効果が見えにくい」と感じている企業様も、安心して採用活動をスタートいただけます。",
    },
    { 
        id: 2, 
        text: "Factor Xキャリアでは、採用後のリスクもサポート。",
        text2: "万が一、入社3ヶ月以内の早期退職が発生した場合、紹介料の一部をご返金いたします。",
        text3: "「採用したけど、すぐに辞めてしまうかも」といった不安も軽減。",
        text4: "「定着する人材」の確保を全力でご支援いたします。"
    }
]

// Factor Xの特徴の画像
export interface FlowImgType {
    id: number;
    img: string;
}

export const FLOW_IMG: FlowImgType[] = [
    { id: 0, img: "https://www.factorx.jp/xcareercompany/assets/flow/no1.jpg"},
    { id: 1, img: "https://www.factorx.jp/xcareercompany/assets/flow/no2.jpg"},
    { id: 2, img: "https://www.factorx.jp/xcareercompany/assets/flow/no3.jpg"},
    { id: 3, img: "https://www.factorx.jp/xcareercompany/assets/flow/no4.jpg"},
    { id: 4, img: "https://www.factorx.jp/xcareercompany/assets/flow/no5.jpg"},
    { id: 5, img: "https://www.factorx.jp/xcareercompany/assets/flow/no6.jpg"},
    { id: 6, img: "https://www.factorx.jp/xcareercompany/assets/flow/no7.jpg"},
    { id: 7, img: "https://www.factorx.jp/xcareercompany/assets/flow/no8.jpg"},
    { id: 8, img: "https://www.factorx.jp/xcareercompany/assets/flow/no9.jpg"},
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
    {id: 0, title: "年齢別の割合"},
    {id: 1, title: "経験職種別の割合"},
    {id: 2, title: "年収帯の割合"}
]

// グラフ画像
export interface GraphImgType {
    id: number;
    img: string;
}

export const GRAPH_IMG: GraphImgType[] = [
    {id: 0, img: "https://www.factorx.jp/xcareercompany/assets/graph/age-graph.png"},
    {id: 1, img: "https://www.factorx.jp/xcareercompany/assets/graph/category-graph.png"},
    {id: 2, img: "https://www.factorx.jp/xcareercompany/assets/graph/income-graph.png"},
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
    { id: 0, img: "https://www.factorx.jp/xcareercompany/assets/voice/person1.png"},
    { id: 1, img: "https://www.factorx.jp/xcareercompany/assets/voice/person1.png"},
]

// 会社名
export interface CompanyNameType {
    id: number;
    text: string;
}

export const COMPANY_NAME: CompanyNameType[] = [
    {id: 0, text: "株式会社ツクバ"},
    {id: 1, text: "日鉄精圧品株式会社"},
]

// 所属部署
export interface DapertmentType {
    id: number;
    text: string;
}

export const DEPERTMENT_NAME: DapertmentType[] = [
    {id: 0, text: "取締役　工場長"},
    {id: 1, text: "総務部　部長"},
]

// 氏名
export interface PersonNameType {
    id: number;
    text: string;
    text2: string;
}

export const PERSON_NAME: PersonNameType[] = [
    {id: 0, text: "後藤　成幸", text2: "様"},
    {id: 1, text: "小幡　康隆", text2: "様"},
]

// コメント内容
export interface CommentType {
    id: number;
    text: string;
}

export const COMMENT: CommentType[] = [
    {id: 0, text: "FactorXキャリアのエージェントは製造業の様々な業種に詳しいこともあり、必要なスキルを簡単に伝えるだけで、適材な人材がすぐ見つかることで助かっています。また紹介料が他社比較して、安価のため、安心して利用することができます。"},
    {id: 1, text: "FactorXキャリアは専門性の高い要件に対し、マッチ率が高い人材を紹介して頂けます。特に定量的に表現できない要件に対し、言語化してもらえる点や製造業の人材の実態等の情報提供や入社後のフォロー等、付加価値の高い人材紹介サービスです。今後も引き続き、よろしくお願いいたします。"}
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
    { id: 0, status: "success", title: "送信完了", img: "https://www.factorx.jp/xcareercompany/assets/submit/okmark.png", altImg: "送信完了画像", text: "お問い合わせ受付を完了いたしました。", text2: "担当者よりご連絡を差し上げますので、しばらくお待ちくださいますようよろしくお願いいたします。"},
    { id: 1, status: "failed", title: "送信失敗", img: "https://www.factorx.jp/xcareercompany/assets/submit/ngmark.png", altImg: "送信失敗画像", text: "メッセージの送信に失敗しました。", text2: "大変お手数ですが、時間をおいてから再度お試しください。"}
]
