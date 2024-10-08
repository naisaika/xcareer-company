import styles from "./CompanyInfoContents.module.scss"

export const CompanyInfoContents = () => {
    return (
      <div className={styles.companyInfoCont}>
        <dl className={styles.companyInfoList}>
            <dt>会社名</dt>
            <dd>半田重工業株式会社</dd>
            <dt>創業</dt>
            <dd>1937年12月</dd>
            <dt>代表者</dt>
            <dd>新美彰崇</dd>
            <dt>事業内容</dt>
            <dd>
                フォークリフト用リフトブラケット製作<br />
                フォークリフト用及び自動車用部品切削加工<br />
                各種産業用油圧シリンダー設計・製作<br />
                画像検査装置<br />
                IoT製品の設計・開発<br />
                情報通信業<br />
                有料職業紹介業
            </dd>
            <dt>所在地</dt>
                <dd>
                    〒475-0034 愛知県半田市東億田町161番地<br />
                    TEL: 0569-21-5539<br />
                    FAX: 0569-22-5054
                </dd>
                <dt>許可番号</dt>
                <dd>
                    <div>有料職業紹介事業許可番号</div>
                    <div>23-ユ-302363</div>
                </dd>
                </dl>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.5987881568275!2d136.95475222535472!3d34.89756458946602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600485109619e917%3A0x41b00b439e37624c!2z5Y2K55Sw6YeN5bel5qWt!5e0!3m2!1sja!2sjp!4v1710159883492!5m2!1sja!2sjp"
                    width="500"
                    height="450"
                    loading="lazy"
                    title="半田重工業"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                ></iframe>
      </div>
    );
  };
