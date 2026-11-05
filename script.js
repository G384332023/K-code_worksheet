// 文字ごとのレベル、K-code、お手本画像をまとめて保存するデータです。
const kcodeData = {
    // カタカナ
    "ア": {
        level: "カタカナ",
        // アルファベット法で表示するK-codeです。
        a_code: "<u>Hz</u> Z",
        // マス目の左端に表示するお手本画像の場所です。
        image: "手本/ア.png"
    },
    "イ": {
        level: "カタカナ",
        a_code: "Z I",
        image: "手本/イ.png"
    },
    "ウ": {
        level: "カタカナ",
        a_code: "i i <u>HZ</u>",
        image: "手本/ウ.png"
    },
    "エ": {
        level: "カタカナ",
        a_code: "h i H",
        image: "手本/エ.png"
    },
    "オ": {
        level: "カタカナ",
        a_code: "H Iw Z",
        image: "手本/オ.png"
    },
    "カ": {
        level: "カタカナ",
        a_code: "<u>HZw</u> Z",
        image: "手本/カ.png"
    },
    "キ": {
        level: "カタカナ",
        a_code: "h H I",
        image: "手本/キ.png"
    },
    "ク": {
        level: "カタカナ",
        a_code: "z <u>hZ</u>",
        image: "手本/ク.png"
    },
    "ケ": {
        level: "カタカナ",
        a_code: "z H Z",
        image: "手本/ケ.png"
    },
    "コ": {
        level: "カタカナ",
        a_code: "<u>HI</u> H",
        image: "手本/コ.png"
    },
    "サ": {
        level: "カタカナ",
        a_code: "H i Z",
        image: "手本/サ.png"
    },
    "シ": {
        level: "カタカナ",
        a_code: "n n V",
        image: "手本/シ.png"
    },
    "ス": {
        level: "カタカナ",
        a_code: "<u>HZ</u> n",
        image: "手本/ス.png"
    },
    "セ": {
        level: "カタカナ",
        a_code: "<u>Hz</u> L",
        image: "手本/セ.png"
    },
    "ソ": {
        level: "カタカナ",
        a_code: "n Z",
        image: "手本/ソ.png"
    },
    "タ": {
        level: "カタカナ",
        a_code: "z <u>hZ</u> n",
        image: "手本/タ.png"
    },
    "チ": {
        level: "カタカナ",
        a_code: "z H Z",
        image: "手本/チ.png"
    },
    "ツ": {
        level: "カタカナ",
        a_code: "n n Z",
        image: "手本/ツ.png"
    },
    "テ": {
        level: "カタカナ",
        a_code: "h H Z",
        image: "手本/テ.png"
    },
    "ト": {
        level: "カタカナ",
        a_code: "I n",
        image: "手本/ト.png"
    },
    "ナ": {
        level: "カタカナ",
        a_code: "H Z",
        image: "手本/ナ.png"
    },
    "ニ": {
        level: "カタカナ",
        a_code: "h H",
        image: "手本/ニ.png"
    },
    "ヌ": {
        level: "カタカナ",
        a_code: "<u>HZ</u> n",
        image: "手本/ヌ.png"
    },
    "ネ": {
        level: "カタカナ",
        a_code: "n <u>HZ</u> I n",
        image: "手本/ネ.png"
    },
    "ノ": {
        level: "カタカナ",
        a_code: "Z",
        image: "手本/ノ.png"
    },
    "ハ": {
        level: "カタカナ",
        a_code: "Z N",
        image: "手本/ハ.png"
    },
    "ヒ": {
        level: "カタカナ",
        a_code: "H L",
        image: "手本/ヒ.png"
    },
    "フ": {
        level: "カタカナ",
        a_code: "<u>HZ</u>",
        image: "手本/フ.png"
    },
    "ヘ": {
        level: "カタカナ",
        a_code: "<u>vN</u>",
        image: "手本/ヘ.png"
    },
    "ホ": {
        level: "カタカナ",
        a_code: "H Iw z n",
        image: "手本/ホ.png"
    },
    "マ": {
        level: "カタカナ",
        a_code: "<u>Hz</u> n",
        image: "手本/マ.png"
    },
    "ミ": {
        level: "カタカナ",
        a_code: "n n n",
        image: "手本/ミ.png"
    },
    "ム": {
        level: "カタカナ",
        a_code: "<u>ZH</u> n" ,
        image: "手本/ム.png"
    },
    "メ": {
        level: "カタカナ",
        a_code: "Z n",
        image: "手本/メ.png"
    },
    "モ": {
        level: "カタカナ",
        a_code: "h H L",
        image: "手本/モ.png"
    },
    "ヤ": {
        level: "カタカナ",
        a_code: "<u>Hz</u> I",
        image: "手本/ヤ.png"
    },
    "ユ": {
        level: "カタカナ",
        a_code: "<u>hi</u> H",
        image: "手本/ユ.png"
    },
    "ヨ": {
        level: "カタカナ",
        a_code: "<u>HI</u> H H",
        image: "手本/ヨ.png"
    },
    "ラ": {
        level: "カタカナ",
        a_code: "H <u>HZ</u>",
        image: "手本/ラ.png"
    },
    "リ": {
        level: "カタカナ",
        a_code: "i Z",
        image: "手本/リ.png"
    },
    "ル": {
        level: "カタカナ",
        a_code: "Z <u>Iv</u>",
        image: "手本/ル.png"
    },
    "レ": {
        level: "カタカナ",
        a_code: "<u>IV</u>",
        image: "手本/レ.png"
    },
    "ロ": {
        level: "カタカナ",
        a_code: "I <u>HI</u> H",
        image: "手本/ロ.png"
    },
    "ワ": {
        level: "カタカナ",
        a_code: "i <u>HZ</u>",
        image: "手本/ワ.png"
    },
    "ヲ": {
        level: "カタカナ",
        a_code: "H H Z",
        image: "手本/ヲ.png"
    },
    "ン": {
        level: "カタカナ",
        a_code: "n V",
        image: "手本/ン.png"
    },

    // N5
    "一": {
        level: "N5",
        a_code: "H",
        image: "手本/一.png"
    },
    "二": {
        level: "N5",
        a_code: "h H",
        image: "手本/二.png"
    },
    "三": {
        level: "N5",
        a_code: "h h H",
        image: "手本/三.png"
    },
    "四": {
        level: "N5",
        a_code: "I <u>HI</u> z l H",
        image: "手本/四.png"
    },
    "五": {
        level: "N5",
        a_code: "h I <u>hi</u> H",
        image: "手本/五.png"
    },
    "六": {
        level: "N5",
        a_code: "i H z n",
        image: "手本/六.png"
    },
    "七": {
        level: "N5",
        a_code: "H L",
        image: "手本/七.png"
    },
    "八": {
        level: "N5",
        a_code: "Z N",
        image: "手本/八.png"
    },
    "九": {
        level: "N5",
        a_code: "Z <u>HLw</u>",
        image: "手本/九.png"
    },
    "十": {
        level: "N5",
        a_code: "H I",
        image: "手本/十.png"
    },
    "百": {
        level: "N5",
        a_code: "H z I <u>hI</u> h h",
        image: "手本/百.png"
    },
    "千": {
        level: "N5",
        a_code: "z H I",
        image: "手本/千.png"
    },
    "円": {
        level: "N5",
        a_code: "I <u>HIw</u> i H",
        image: "手本/円.png"
    },
    "月": {
        level: "N5",
        a_code: "Z <u>hIw</u> h h",
        image: "手本/月.png"
    },
    "火": {
        level: "N5",
        a_code: "n z Z n",
        image: "手本/火.png"
    },
    "水": {
        level: "N5",
        a_code: "Iw <u>hZ</u> z N",
        image: "手本/水.png"
    },
    "木": {
        level: "N5",
        a_code: "H I Z N",
        image: "手本/木.png"
    },
    "金": {
        level: "N5",
        a_code: "Z N h h I n z H",
        image: "手本/金.png"
    },
    "土": {
        level: "N5",
        a_code: "h I H",
        image: "手本/土.png"
    },
    "日": {
        level: "N5",
        a_code: "I <u>hI</u> h h",
        image: "手本/日.png"
    },
    "年": {
        level: "N5",
        a_code: "z h h I H I",
        image: "手本/年.png"
    },
    "人": {
        level: "N5",
        a_code: "Z n",
        image: "手本/人.png"
    },
    "子": {
        level: "N5",
        a_code: "<u>hz</u> Zw H",
        image: "手本/子.png"
    },
    "男": {
        level: "N5",
        a_code: "I <u>HI</u> I H H <u>Hzw</u> Z",
        image: "手本/男.png"
    },
    "女": {
        level: "N5",
        a_code: "<u>ZN</u> Z H",
        image: "手本/女.png"
    },
    "父": {
        level: "N5",
        a_code: "z n Z N",
        image: "手本/父.png"
    },
    "母": {
        level: "N5",
        a_code: "<u>ZN</u> <u>HZw</u> n n H",
        image: "手本/母.png"
    },
    "口": {
        level: "N5",
        a_code: "I <u>HI</u> H",
        image: "手本/口.png"
    },
    "目": {
        level: "N5",
        a_code: "I <u>hI</u> h h h",
        image: "手本/目.png"
    },
    "耳": {
        level: "N5",
        a_code: "H i h h V I",
        image: "手本/耳.png"
    },
    "手": {
        level: "N5",
        a_code: "z h H Zw",
        image: "手本/手.png"
    },
    "足": {
        level: "N5",
        a_code: "I <u>HI</u> H I H Z N",
        image: "手本/足.png"
    },
    "体": {
        level: "N5",
        a_code: "Z I H I Z N h",
        image: "手本/体.png"
    },
    "力": {
        level: "N5",
        a_code: "<u>Hzw</u> Z",
        image: "手本/力.png"
    },
    "上": {
        level: "N5",
        a_code: "I h H",
        image: "手本/上.png"
    },
    "下": {
        level: "N5",
        a_code: "H I n",
        image: "手本/下.png"
    },
    "左": {
        level: "N5",
        a_code: "H Z h I H",
        image: "手本/左.png"
    },
    "右": {
        level: "N5",
        a_code: "Z H I <u>HI</u> H",
        image: "手本/右.png"
    },
    "大": {
        level: "N5",
        a_code: "H Z n",
        image: "手本/大.png"
    },
    "小": {
        level: "N5",
        a_code: "Iw z n",
        image: "手本/小.png"
    },
    "中": {
        level: "N5",
        a_code: "i <u>Hi</u> H I",
        image: "手本/中.png"
    },
    "外": {
        level: "N5",
        a_code: "z <u>hZ</u> n I n",
        image: "手本/外.png"
    },
    "学": {
        level: "N5",
        a_code: "n n z z Hw <u>hz</u> Zw H",
        image: "手本/学.png"
    },
    "校": {
        level: "N5",
        a_code: "h <u>IZ</u> n i H z n Z N",
        image: "手本/校.png"
    },
    "先": {
        level: "N5",
        a_code: "z h I H Z Lw",
        image: "手本/先.png"
    },
    "生": {
        level: "N5",
        a_code: "z h I h H",
        image: "手本/生.png"
    },
    "本": {
        level: "N5",
        a_code: "H I Z N h",
        image: "手本/本.png"
    },
    "名": {
        level: "N5",
        a_code: "z <u>hZ</u> n I <u>HI</u> H",
        image: "手本/名.png"
    },
    "友": {
        level: "N5",
        a_code: "H Z h z n",
        image: "手本/友.png"
    },
    "山": {
        level: "N5",
        a_code: "I <u>iH</u> i",
        image: "手本/山.png"
    },
    "川": {
        level: "N5",
        a_code: "Z i I",
        image: "手本/川.png"
    },
    "田": {
        level: "N5",
        a_code: "I <u>HI</u> I H H",
        image: "手本/田.png"
    },
    "石": {
        level: "N5",
        a_code: "H Z I <u>HI</u> H",
        image: "手本/石.png"
    },
    "雨": {
        level: "N5",
        a_code: "h i <u>Hiw</u> I n n n n",
        image: "手本/雨.png"
    },
    "夕": {
        level: "N5",
        a_code: "z <u>hZ</u> n",
        image: "手本/夕.png"
    },
    "岩": {
        level: "N5",
        a_code: "I <u>iH</u> i H Z I <u>HI</u> H",
        image: "手本/岩.png"
    },
    "音": {
        level: "N5",
        a_code: "i h n z  H I <u>hI</u> h h",
        image: "手本/音.png"
    },
    "林": {
        level: "N5",
        a_code: "h I Z n H I Z N",
        image: "手本/林.png"
    },
    "森": {
        level: "N5",
        a_code: "H I Z N h I Z n H I Z N",
        image: "手本/森.png"
    },
    "花": {
        level: "N5",
        a_code: "H n z Z I z Lw",
        image: "手本/花.png"
    },
    "竹": {
        level: "N5",
        a_code: "Z h I Z h Iw",
        image: "手本/竹.png"
    },
    "犬": {
        level: "N5",
        a_code: "H Z n n",
        image: "手本/犬.png"
    },
    "貝": {
        level: "N5",
        a_code: "I h I h h h z n",
        image: "手本/貝.png"
    },
    "牛": {
        level: "N5",
        a_code: "z h H I",
        image: "手本/牛.png"
    },
    "魚": {
        level: "N5",
        a_code: "Z h z I <u>HI</u> I H H z n n n",
        image: "手本/魚.png"
    },
    "鳥": {
        level: "N5",
        a_code: "z I h i h h H <u>HZw</u> z n n n",
        image: "手本/鳥.png"
    },
    "米": {
        level: "N5",
        a_code: "n z H I Z N",
        image: "手本/米.png"
    },
    "肉": {
        level: "N5",
        a_code: "I H Iw Z n Z n",
        image: "手本/肉.png"
    },
    "茶": {
        level: "N5",
        a_code: "H n z Z N h I z n",
        image: "手本/茶.png"
    },
    "好": {
        level: "N5",
        a_code: "<u>Zn</u> Z v <u>hz</u> Zw H",
        image: "手本/好.png"
    },
    "物": {
        level: "N5",
        a_code: "z h I v Z <u>HZw</u> z Z",
        image: "手本/物.png"
    },
    "今": {
        level: "N5",
        a_code: "Z N h <u>HZ</u>",
        image: "手本/今.png"
    },
    "何": {
        level: "N5",
        a_code: "Z I H i <u>hi</u> h Iw",
        image: "手本/何.png"
    },
    "分": {
        level: "N5",
        a_code: "Z N <u>HZw</u> Z",
        image: "手本/分.png"
    },
    "半": {
        level: "N5",
        a_code: "n z h H I",
        image: "手本/半.png"
    },
    "方": {
        level: "N5",
        a_code: "i H <u>nZw</u> Z",
        image: "手本/方.png"
    },
    "時": {
        level: "N5",
        a_code: "I <u>hI</u> h h h I H H Iw n",
        image: "手本/時.png"
    },
    "間": {
        level: "N5",
        a_code: "I <u>hi</u> h h i <u>hIw</u> h h i <u>hi</u> h h",
        image: "手本/間.png"
    },
    "町": {
        level: "N5",
        a_code: "I <u>HI</u> I H H h Iw",
        image: "手本/町.png"
    },
    "寺": {
        level: "N5",
        a_code: "h I H h Iw n",
        image: "手本/寺.png"
    },
    "東": {
        level: "N5",
        a_code: "H i <u>Hi</u> H H I Z N",
        image: "手本/東.png"
    },
    "西": {
        level: "N5",
        a_code: "H I <u>HI</u> Z L H",
        image: "手本/西.png"
    },
    "南": {
        level: "N5",
        a_code: "h I I <u>Hiw</u> n z h H I",
        image: "手本/南.png"
    },
    "北": {
        level: "N5",
        a_code: "h I V  z Lw",
        image: "手本/北.png"
    },
    "車": {
        level: "N5",
        a_code: "H i <u>Hi</u> H H H I",
        image: "手本/車.png"
    },
    "電": {
        level: "N5",
        a_code: "h z Hw i n n n n I <u>HI</u> H H Lw",
        image: "手本/電.png"
    },
    "高": {
        level: "N5",
        a_code: "i H I <u>hi</u> h I <u>HIw</u> I <u>hi</u> h",
        image: "手本/高.png"
    },
    "安": {
        level: "N5",
        a_code: "i z Hw <u>ZN</u> Z H",
        image: "手本/安.png"
    },
    "多": {
        level: "N5",
        a_code: "z <u>hZ</u> n z <u>hZ</u> n",
        image: "手本/多.png"
    },
    "少": {
        level: "N5",
        a_code: "Iw z n Z",
        image: "手本/少.png"
    },
    "新": {
        level: "N5",
        a_code: "i h n z H H I Z n z Z h I",
        image: "手本/新.png"
    },
    "古": {
        level: "N5",
        a_code: "H I i <u>hi</u> h",
        image: "手本/古.png"
    },
    "明": {
        level: "N5",
        a_code: "I <u>hI</u> h h Z <u>hIw</u> h h",
        image: "手本/明.png"
    },
    "暗": {
        level: "N5",
        a_code: "I <u>hI</u> h h i h n z H I <u>hI</u> h h",
        image: "手本/暗.png"
    },
    "長": {
        level: "N5",
        a_code: "I h h h H <u>Iv</u> z N",
        image: "手本/長.png"
    },
    "元": {
        level: "N5",
        a_code: "h H Z L",
        image: "手本/元.png"
    },
    "気": {
        level: "N5",
        a_code: "z h h <u>HNw</u> Z n",
        image: "手本/気.png"
    },
    "見": {
        level: "N5",
        a_code: "I <u>hI</u> h h h Z Lw",
        image: "手本/見.png"
    },
    "立": {
        level: "N5",
        a_code: "i h N Z H",
        image: "手本/立.png"
    },
    "入": {
        level: "N5",
        a_code: "z N",
        image: "手本/入.png"
    },
    "出": {
        level: "N5",
        a_code: "I <u>iH</u> i <u>iH</u> i",
        image: "手本/出.png"
    },
    "休": {
        level: "N5",
        a_code: "Z I H I Z N",
        image: "手本/休.png"
    },
    "行": {
        level: "N5",
        a_code: "z z I h H Iw",
        image: "手本/行.png"
    },
    "来": {
        level: "N5",
        a_code: "h n z H I Z N",
        image: "手本/来.png"
    },
    "言": {
        level: "N5",
        a_code: "n H h h i <u>hi</u> h",
        image: "手本/言.png"
    },
    "帰": {
        level: "N5",
        a_code: "i Z <u>hi</u> h h z Hw i <u>hiw</u> I",
        image: "手本/帰.png"
    },
    "書": {
        level: "N5",
        a_code: "<u>hi</u> H h h H I I <u>HI</u> H H",
        image: "手本/書.png"
    },
    "読": {
        level: "N5",
        a_code: "n H h h i <u>hi</u> h H I h z Hw Z Lw",
        image: "手本/読.png"
    },
    "話": {
        level: "N5",
        a_code: "n H h h I <u>hi</u> h z H I I <u>HI</u> H",
        image: "手本/話.png"
    },
    "聞": {
        level: "N5",
        a_code: "I <u>hi</u> h h i <u>hIw</u> h h H i h h V I",
        image: "手本/聞.png"
    },
    "食": {
        level: "N5",
        a_code: "Z N i <u>hi</u> h h <u>Iv</u> z N",
        image: "手本/食.png"
    },
    "飲": {
        level: "N5",
        a_code: "Z n i <u>hi</u> h h <u>Iv</u> n z Hw Z n",
        image: "手本/飲.png"
    },
    "買": {
        level: "N5",
        a_code: "i <u>Hi</u> n z H I <u>hI</u> h h h z n",
        image: "手本/買.png"
    },

    //N4
    "朝": {
        level: "N4",
        a_code: "H I i <u>hi</u> h h H I Z <u>hIw</u> h h",
        image: "手本/朝.png"
    },
    "昼": {
        level: "N4",
        a_code: "<u>Hi</u> H Z N I <u>hI</u> h h H",
        image: "手本/昼.png"
    },
    "晩": {
        level: "N4",
        a_code: "I <u>hI</u> h h Z <u>hZ</u> i <u>Hi</u> i H Z Lw",
        image: "手本/晩.png"
    },
    "夜": {
        level: "N4",
        a_code: "i H Z I z <u>hZ</u> n N",
        image: "手本/夜.png"
    },
    "前": {
        level: "N4",
        a_code: "n z H I <u>hIw</u> h h i Iw",
        image: "手本/前.png"
    },
    "後": {
        level: "N4",
        a_code: "z z I <u>zn</u> <u>ZV</u> n Z <u>hZ</u> N",
        image: "手本/後.png"
    },
    "正": {
        level: "N4",
        a_code: "H I h i H",
        image: "手本/正.png"
    },
    "午": {
        level: "N4",
        a_code: "z h H I",
        image: "手本/午.png"
    },
    "毎": {
        level: "N4",
        a_code: "z H <u>ZN</u> <u>hZw</u> z H",
        image: "手本/毎.png"
    },
    "週": {
        level: "N4",
        a_code: "Z <u>HIw</u> h i H i <u>hi</u> h n <u>hznz</u> N",
        image: "手本/週.png"
    },
    "去": {
        level: "N4",
        a_code: "h I H <u>ZV</u> n",
        image: "手本/去.png"
    },
    "家": {
        level: "N4",
        a_code: "i z Hw H z Zw Z Z z N",
        image: "手本/家.png"
    },
    "族": {
        level: "N4",
        a_code: "i H <u>nZw</u> Z z H z h H Z n",
        image: "手本/族.png"
    },
    "兄": {
        level: "N4",
        a_code: "I <u>HI</u> H Z Lw",
        image: "手本/兄.png"
    },
    "弟": {
        level: "N4",
        a_code: "n z <u>Hz</u> H <u>zHzw</u> I Z",
        image: "手本/弟.png"
    },
    "姉": {
        level: "N4",
        a_code: "<u>Zn</u> Z v i H i <u>hiw</u> I",
        image: "手本/姉.png"
    },
    "妹": {
        level: "N4",
        a_code: "<u>Zn</u> Z v h H I Z N",
        image: "手本/妹.png"
    },
    "夫": {
        level: "N4",
        a_code: "h H Z n",
        image: "手本/夫.png"
    },
    "妻": {
        level: "N4",
        a_code: "H <u>hi</u> H h I <u>ZN</u> Z H",
        image: "手本/妻.png"
    },
    "主": {
        level: "N4",
        a_code: "n H I h H",
        image: "手本/主.png"
    },
    "奥": {
        level: "N4",
        a_code: "z I <u>HI</u> n z H I Z n H Z n",
        image: "手本/奥.png"
    },
    "私": {
        level: "N4",
        a_code: "z h I Z n <u>Zv</u> n",
        image: "手本/私.png"
    },
    "王": {
        level: "N4",
        a_code: "H I h H",
        image: "手本/王.png"
    },
    "様": {
        level: "N4",
        a_code: "h I Z n n z H h H Iw n v z N",
        image: "手本/様.png"
    },
    "才": {
        level: "N4",
        a_code: "H Iw Z",
        image: "手本/才.png"
    },
    "赤": {
        level: "N4",
        a_code: "h I H Z Iw z n",
        image: "手本/赤.png"
    },
    "青": {
        level: "N4",
        a_code: "h I h H I <u>hIw</u> h h",
        image: "手本/青.png"
    },
    "白": {
        level: "N4",
        a_code: "z I <u>HI</u> H H",
        image: "手本/白.png"
    },
    "黒": {
        level: "N4",
        a_code: "i <u>Hi</u> H H I h H z n n n",
        image: "手本/黒.png"
    },
    "色": {
        level: "N4",
        a_code: "Z <u>hZ</u> <u>Hi</u> i H Lw",
        image: "手本/色.png"
    },
    "銀": {
        level: "N4",
        a_code: "Z n h H I n z V <u>hi</u> h h <u>Iv</u> z N",
        image: "手本/銀.png"
    },
    "黄": {
        level: "N4",
        a_code: "h I I H i <u>Hi</u> I H H z n",
        image: "手本/黄.png"
    },
    "緑": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n <u>hi</u> h H Iw n v z n",
        image: "手本/緑.png"
    },
    "丸": {
        level: "N4",
        a_code: "Z <u>HLw</u> n",
        image: "手本/丸.png"
    },
    "玉": {
        level: "N4",
        a_code: "H I h H n",
        image: "手本/玉.png"
    },
    "春": {
        level: "N4",
        a_code: "H h H Z n I <u>hI</u> h h",
        image: "手本/春.png"
    },
    "夏": {
        level: "N4",
        a_code: "H z I <u>hI</u> h h h Z <u>hZ</u> N",
        image: "手本/夏.png"
    },
    "秋": {
        level: "N4",
        a_code: "z h I Z n n z Z n",
        image: "手本/秋.png"
    },
    "冬": {
        level: "N4",
        a_code: "z <u>hZ</u> N n n",
        image: "手本/冬.png"
    },
    "空": {
        level: "N4",
        a_code: "i z Hw z l h I H",
        image: "手本/空.png"
    },
    "天": {
        level: "N5",
        a_code: "H h Z n",
        image: "手本/天.png"
    },
    "風": {
        level: "N4",
        a_code: "Z <u>HNw</u> Z i <u>Hi</u> H I V n",
        image: "手本/風.png"
    },
    "台": {
        level: "N4",
        a_code: "<u>ZV</u> n I <u>HI</u> H",
        image: "手本/台.png"
    },
    "雲": {
        level: "N4",
        a_code: "h z Hw i n n n n h H <u>zV</u> n",
        image: "手本/雲.png"
    },
    "雪": {
        level: "N4",
        a_code: "h z Hw i n n n n <u>HI</u> H H",
        image: "手本/雪.png"
    },
    "晴": {
        level: "N4",
        a_code: "I <u>hI</u> h h H I h H I <u>hIw</u> h h",
        image: "手本/晴.png"
    },
    "星": {
        level: "N4",
        a_code: "I <u>HI</u> H H z h I h H",
        image: "手本/星.png"
    },
    "光": {
        level: "N4",
        a_code: "I n z H Z Lw",
        image: "手本/光.png"
    },
    "地": {
        level: "N4",
        a_code: "h I V <u>HZw</u> I Lw",
        image: "手本/地.png"
    },
    "谷": {
        level: "N4",
        a_code: "z n Z N I <u>HI</u> H",
        image: "手本/谷.png"
    },
    "自": {
        level: "N4",
        a_code: "z I <u>hI</u> h h h",
        image: "手本/自.png"
    },
    "然": {
        level: "N4",
        a_code: "z <u>hZ</u> n n H Z n n z n n n",
        image: "手本/然.png"
    },
    "草": {
        level: "N5",
        a_code: "H n z i <u>hi</u> h h H I",
        image: "手本/草.png"
    },
    "原": {
        level: "N4",
        a_code: "H Z z i <u>hi</u> h h Iw z n",
        image: "手本/原.png"
    },
    "海": {
        level: "N4",
        a_code: "n n v z H <u>ZN</u> <u>hZw</u> z H",
        image: "手本/海.png"
    },
    "湖": {
        level: "N4",
        a_code: "n n v h I i <u>hi</u> h Z <u>hIw</u> h h",
        image: "手本/湖.png"
    },
    "池": {
        level: "N4",
        a_code: "n n v <u>HZw</u> I Lw",
        image: "手本/池.png"
    },
    "里": {
        level: "N4",
        a_code: "i <u>Hi</u> H H I h H",
        image: "手本/里.png"
    },
    "野": {
        level: "N4",
        a_code: "i <u>Hi</u> H H I h V <u>hz</u> n  <u>Hz</u> Iw",
        image: "手本/野.png"
    },
    "虫": {
        level: "N4",
        a_code: "i <u>Hi</u> H I V n",
        image: "手本/虫.png"
    },
    "羽": {
        level: "N4",
        a_code: "<u>hIw</u> n v <u>hIw</u> n v",
        image: "手本/羽.png"
    },
    "馬": {
        level: "N4",
        a_code: "I h I h h <u>HZw</u> z n n n",
        image: "手本/馬.png"
    },
    "鳴": {
        level: "N4",
        a_code: "i <u>hi</u> h z I <u>hi</u> h h H <u>HZw</u> z n n n",
        image: "手本/鳴.png"
    },
    "毛": {
        level: "N4",
        a_code: "z h  H Lw",
        image: "手本/毛.png"
    },
    "糸": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n",
        image: "手本/糸.png"
    },
    "衣": {
        level: "N4",
        a_code: "i H Z <u>Iv</u> z N",
        image: "手本/衣.png"
    },
    "服": {
        level: "N4",
        a_code: "Z <u>hIw</u> h h I <u>hzw</u> <u>hz</u> n",
        image: "手本/服.png"
    },
    "洋": {
        level: "N4",
        a_code: "n n v n z H h H I",
        image: "手本/洋.png"
    },
    "料": {
        level: "N4",
        a_code: "n z H I Z n n n H I",
        image: "手本/料.png"
    },
    "理": {
        level: "N4",
        a_code: "H I h V I <u>HI</u> H H I h H",
        image: "手本/理.png"
    },
    "飯": {
        level: "N4",
        a_code: "Z n i <u>hi</u> h h <u>Iv</u> n H Z <u>hZ</u> N",
        image: "手本/飯.png"
    },
    "麦": {
        level: "N4",
        a_code: "H I h H Z <u>nZ</u> N",
        image: "手本/麦.png"
    },
    "油": {
        level: "N4",
        a_code: "n n v i <u>Hi</u> I H H",
        image: "手本/油.png"
    },
    "酒": {
        level: "N4",
        a_code: "n n v H I <u>HI</u> Z L H H",
        image: "手本/酒.png"
    },
    "味": {
        level: "N4",
        a_code: "i <u>hi</u> h h H I Z N",
        image: "手本/味.png"
    },
    "住": {
        level: "N4",
        a_code: "Z I n H I h H",
        image: "手本/住.png"
    },
    "所": {
        level: "N4",
        a_code: "H <u>hi</u> h Z z Z h I",
        image: "手本/所.png"
    },
    "都": {
        level: "N4",
        a_code: "h I H Z I <u>hI</u> h h <u>hz</u> Nw I",
        image: "手本/都.png"
    },
    "道": {
        level: "N4",
        a_code: "n z H z I <u>hI</u> h h h n <u>hznz</u> N",
        image: "手本/道.png"
    },
    "府": {
        level: "N4",
        a_code: "i H Z Z I H Iw n",
        image: "手本/府.png"
    },
    "県": {
        level: "N4",
        a_code: "I <u>hI</u> h h h <u>IH</u> I z n",
        image: "手本/県.png"
    },
    "京": {
        level: "N4",
        a_code: "i H I <u>HI</u> H Iw z n",
        image: "手本/京.png"
    },
    "市": {
        level: "N4",
        a_code: "i H i <u>hiw</u> I",
        image: "手本/市.png"
    },
    "区": {
        level: "N4",
        a_code: "H Z N <u>IH</u>",
        image: "手本/区.png"
    },
    "村": {
        level: "N4",
        a_code: "h I Z n H Iw n",
        image: "手本/村.png"
    },
    "番": {
        level: "N4",
        a_code: "z n z H I Z N I <u>HI</u> I H H",
        image: "手本/番.png"
    },
    "号": {
        level: "N4",
        a_code: "i <u>hi</u> h H <u>zhZw</u>",
        image: "手本/号.png"
    },
    "国": {
        level: "N4",
        a_code: "I <u>HI</u> H I h H n H",
        image: "手本/国.png"
    },
    "紙": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n z <u>Iv</u> H Nw",
        image: "手本/紙.png"
    },
    "店": {
        level: "N4",
        a_code: "i H Z I h I <u>HI</u> H",
        image: "手本/店.png"
    },
    "客": {
        level: "N4",
        a_code: "i z Hw z <u>hZ</u> N i <u>hi</u> h",
        image: "手本/客.png"
    },
    "売": {
        level: "N4",
        a_code: "H i h z Hw Z Lw",
        image: "手本/売.png"
    },
    "品": {
        level: "N4",
        a_code: "I <u>HI</u> H I <u>HI</u> H I <u>HI</u> H",
        image: "手本/品.png"
    },
    "薬": {
        level: "N4",
        a_code: "H n z z i <u>hi</u> h h n v z n H I Z N",
        image: "手本/薬.png"
    },
    "待": {
        level: "N4",
        a_code: "z Z I h I H H Iw n",
        image: "手本/待.png"
    },
    "合": {
        level: "N4",
        a_code: "Z N h I <u>HI</u> H",
        image: "手本/合.png"
    },
    "計": {
        level: "N4",
        a_code: "n H h h i <u>hi</u> h H I",
        image: "手本/計.png"
    },
    "辺": {
        level: "N4",
        a_code: "<u>HZw</u> Z n <u>hznz</u> N",
        image: "手本/辺.png"
    },
    "交": {
        level: "N4",
        a_code: "i H z n Z N",
        image: "手本/交.png"
    },
    "通": {
        level: "N4",
        a_code: "<u>Hz</u> n I <u>HIw</u> H H I n <u>hznz</u> N",
        image: "手本/通.png"
    },
    "荷": {
        level: "N4",
        a_code: "H n z Z I H i <u>hi</u> h Iw",
        image: "手本/荷.png"
    },
    "送": {
        level: "N4",
        a_code: "n z  h H Z n n <u>hznz</u> N",
        image: "手本/送.png"
    },
    "宅": {
        level: "N4",
        a_code: "i z Hw z H Lw",
        image: "手本/宅.png"
    },
    "止": {
        level: "N4",
        a_code: "I h i H",
        image: "手本/止.png"
    },
    "急": {
        level: "N4",
        a_code: "Z <u>hz</u> <u>HI</u> H H z Nw nw n",
        image: "手本/急.png"
    },
    "特": {
        level: "N4",
        a_code: "z h I V h I H H Iw n",
        image: "手本/特.png"
    },
    "鉄": {
        level: "N4",
        a_code: "Z n h H I n z V z h H Z n",
        image: "手本/鉄.png"
    },
    "船": {
        level: "N4",
        a_code: "z Z <u>hIw</u> n I V z N i <u>hi</u> h",
        image: "手本/船.png"
    },
    "部": {
        level: "N4",
        a_code: "i h n z H i <u>hi</u> h <u>hz</u> Nw I",
        image: "手本/部.png"
    },
    "屋": {
        level: "N4",
        a_code: "<u>Hi</u> H Z H <u>zV</u> n h I H",
        image: "手本/屋.png"
    },
    "教": {
        level: "N4",
        a_code: "h I H Z <u>hz</u> Zw V z H Z N",
        image: "手本/教.png"
    },
    "室": {
        level: "N4",
        a_code: "i z Hw H <u>zV</u> n h I H",
        image: "手本/室.png"
    },
    "会": {
        level: "N4",
        a_code: "Z N h H <u>ZV</u> n",
        image: "手本/会.png"
    },
    "社": {
        level: "N4",
        a_code: "n <u>hZ</u> I n h I H",
        image: "手本/社.png"
    },
    "駅": {
        level: "N4",
        a_code: "I h I h h <u>hZw</u> z n n n <u>HI</u> H Z n",
        image: "手本/駅.png"
    },
    "工": {
        level: "N4",
        a_code: "h I H",
        image: "手本/工.png"
    },
    "場": {
        level: "N4",
        a_code: "h I v i <u>hi</u> h h H z <u>hZw</u> Z Z",
        image: "手本/場.png"
    },
    "病": {
        level: "N4",
        a_code: "i H Z n v H I <u>HIw</u> Z n",
        image: "手本/病.png"
    },
    "院": {
        level: "N4",
        a_code: "<u>hn</u> zw I i z Hw h H Z Lw",
        image: "手本/院.png"
    },
    "公": {
        level: "N4",
        a_code: "Z N <u>ZV</u> n",
        image: "手本/公.png"
    },
    "園": {
        level: "N4",
        a_code: "I <u>HI</u> h i H i <u>Hi</u> H Z I z N H",
        image: "手本/園.png"
    },
    "図": {
        level: "N4",
        a_code: "I <u>HI</u> n n Z n H",
        image: "手本/図.png"
    },
    "館": {
        level: "N4",
        a_code: "Z n i <u>hi</u> h h <u>Iv</u> n i z Hw I <u>hi</u> h <u>hi</u> h",
        image: "手本/館.png"
    },
    "映": {
        level: "N4",
        a_code: "I <u>hI</u> h h i <u>hi</u> H Z n",
        image: "手本/映.png"
    },
    "画": {
        level: "N4",
        a_code: "H i <u>hi</u> I h h <u>IH</u> I",
        image: "手本/画.png"
    },
    "勉": {
        level: "N4",
        a_code: "Z <u>hz</u> i <u>Hi</u> i H Z Lw <u>HZw</u> Z",
        image: "手本/勉.png"
    },
    "強": {
        level: "N4",
        a_code: "<u>hz</u> h <u>zhZw</u> <u>zV</u> n i <u>Hi</u> H I V n",
        image: "手本/強.png"
    },
    "宿": {
        level: "N4",
        a_code: "i z Hw Z I H z I <u>hI</u> h h",
        image: "手本/宿.png"
    },
    "題": {
        level: "N4",
        a_code: "i <u>hi</u> h h H i h z N H z I <u>hI</u> h h h z n",
        image: "手本/題.png"
    },
    "質": {
        level: "N4",
        a_code: "z Z <u>Hi</u> z Z <u>Hi</u> I <u>hI</u> h h h z n",
        image: "手本/質.png"
    },
    "問": {
        level: "N4",
        a_code: "I <u>hi</u> h h i <u>hIw</u> h h i <u>hi</u> h",
        image: "手本/問.png"
    },
    "試": {
        level: "N4",
        a_code: "n H h h i <u>hi</u> h H h i v Nw n",
        image: "手本/試.png"
    },
    "験": {
        level: "N4",
        a_code: "I h I h h <u>hZw</u> z n n n Z N h i <u>Hi</u> H Z n",
        image: "手本/験.png"
    },
    "答": {
        level: "N4",
        a_code: "z h n z h z n Z N h I <u>HI</u> H",
        image: "手本/答.png"
    },
    "考": {
        level: "N4",
        a_code: "h I H Z z <u>ihZw</u>",
        image: "手本/考.png"
    },
    "字": {
        level: "N4",
        a_code: "i z Hw <u>hz</u> Zw H",
        image: "手本/字.png"
    },
    "文": {
        level: "N4",
        a_code: "i H Z N",
        image: "手本/文.png"
    },
    "漢": {
        level: "N4",
        a_code: "n n v H n z i <u>Hi</u> H h H Z n",
        image: "手本/漢.png"
    },
    "数": {
        level: "N4",
        a_code: "n z H I Z n <u>zn</u> Z V z H Z N",
        image: "手本/数.png"
    },
    "英": {
        level: "N4",
        a_code: "H n z i <u>Hi</u> H Z n",
        image: "手本/英.png"
    },
    "語": {
        level: "N4",
        a_code: "n H h h i <u>hi</u> h H Z <u>hi</u> H I <u>HI</u> H",
        image: "手本/語.png"
    },
    "化": {
        level: "N4",
        a_code: "Z I z Lw",
        image: "手本/化.png"
    },
    "育": {
        level: "N4",
        a_code: "i H <u>zV</u> n I <u>hIw</u> h h",
        image: "手本/育.png"
    },
    "研": {
        level: "N4",
        a_code: "H Z i <u>hi</u> h h H Z I",
        image: "手本/研.png"
    },
    "究": {
        level: "N4",
        a_code: "i z Hw z l Z <u>HLw</u>",
        image: "手本/究.png"
    },
    "医": {
        level: "N4",
        a_code: "H z h H Z n <u>IH</u>",
        image: "手本/医.png"
    },
    "科": {
        level: "N4",
        a_code: "z h I Z n n n H I",
        image: "手本/科.png"
    },
    "政": {
        level: "N4",
        a_code: "h I h i V z H Z N",
        image: "手本/政.png"
    },
    "治": {
        level: "N4",
        a_code: "n n v <u>ZV</u> n I <u>HI</u> H",
        image: "手本/治.png"
    },
    "経": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n <u>hZ</u> N h I H",
        image: "手本/経.png"
    },
    "済": {
        level: "N4",
        a_code: "n n v i H Z N Z I h h",
        image: "手本/済.png"
    },
    "歴": {
        level: "N4",
        a_code: "H Z h I Z n h I Z N I h i H",
        image: "手本/歴.png"
    },
    "史": {
        level: "N4",
        a_code: "i <u>Hi</u> H Z n",
        image: "手本/史.png"
    },
    "運": {
        level: "N4",
        a_code: "z Hw h i <u>hi</u> h h H I n <u>hznz</u> N",
        image: "手本/運.png"
    },
    "動": {
        level: "N4",
        a_code: "z H i <u>hi</u> h h I h V h Zw Z",
        image: "手本/動.png"
    },
    "泳": {
        level: "N4",
        a_code: "n n v n <u>hIw</u> <u>hZ</u> z N",
        image: "手本/泳.png"
    },
    "旅": {
        level: "N4",
        a_code: "i H <u>nZw</u> Z z H z I z N",
        image: "手本/旅.png"
    },
    "世": {
        level: "N4",
        a_code: "H I i h <u>IH</u>",
        image: "手本/世.png"
    },
    "界": {
        level: "N4",
        a_code: "I <u>HI</u> I H H Z N Z I",
        image: "手本/界.png"
    },
    "練": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n h i <u>hi</u> h h I Z N",
        image: "手本/練.png"
    },
    "習": {
        level: "N4",
        a_code: "<u>hIw</u> n v <u>hIw</u> n v z I <u>HI</u> H H",
        image: "手本/習.png"
    },
    "写": {
        level: "N4",
        a_code: "z Hw h <u>zhZw</u> H",
        image: "手本/写.png"
    },
    "真": {
        level: "N4",
        a_code: "H i I <u>hI</u> h h h H z n",
        image: "手本/真.png"
    },
    "楽": {
        level: "N4",
        a_code: "z I <u>hI</u> h h n v z n H I Z N",
        image: "手本/楽.png"
    },
    "声": {
        level: "N4",
        a_code: "H i h <u>Hi</u> i H Z",
        image: "手本/声.png"
    },
    "歌": {
        level: "N4",
        a_code: "h i <u>hi</u> h I H i <u>hi</u> h Iw z Hw Z n",
        image: "手本/歌.png"
    },
    "集": {
        level: "N4",
        a_code: "Z I z H I h h h H I Z N",
        image: "手本/集.png"
    },
    "作": {
        level: "N4",
        a_code: "Z I z H I h h",
        image: "手本/作.png"
    },
    "使": {
        level: "N4",
        a_code: "Z I H i <u>Hi</u> H Z n",
        image: "手本/使.png"
    },
    "思": {
        level: "N4",
        a_code: "I <u>HI</u> I H H z Nw nw n",
        image: "手本/思.png"
    },
    "持": {
        level: "N4",
        a_code: "h Iw V h I H H Iw n",
        image: "手本/持.png"
    },
    "当": {
        level: "N4",
        a_code: "I n z <u>HI</u> H H",
        image: "手本/当.png"
    },
    "知": {
        level: "N4",
        a_code: "z h H Z n I <u>HI</u> H",
        image: "手本/知.png"
    },
    "働": {
        level: "N4",
        a_code: "Z I z H i <u>hi</u> h h I h V <u>hZw</u> Z",
        image: "手本/働.png"
    },
    "始": {
        level: "N4",
        a_code: "<u>Zn</u> Z v <u>ZV</u> n I <u>HI</u> H",
        image: "手本/始.png"
    },
    "終": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n z <u>hZ</u> N n n",
        image: "手本/終.png"
    },
    "乗": {
        level: "N4",
        a_code: "z h H i i h I Z N",
        image: "手本/乗.png"
    },
    "降": {
        level: "N4",
        a_code: "<u>hz</u> nw I z <u>hZ</u> N h z H I",
        image: "手本/降.png"
    },
    "開": {
        level: "N4",
        a_code: "I <u>hi</u> h h i <u>hIw</u> h h h H Z I",
        image: "手本/開.png"
    },
    "閉": {
        level: "N4",
        a_code: "I <u>hi</u> h h i <u>hIw</u> h h H Iw Z",
        image: "手本/閉.png"
    },
    "発": {
        level: "N4",
        a_code: "<u>hZ</u> n N z z h H Z Lw",
        image: "手本/発.png"
    },
    "着": {
        level: "N4",
        a_code: "n z H I h H Z I <u>hI</u> h h h",
        image: "手本/着.png"
    },
    "走": {
        level: "N4",
        a_code: "h I H I h Z N",
        image: "手本/走.png"
    },
    "歩": {
        level: "N4",
        a_code: "I h i H Iw z n Z",
        image: "手本/歩.png"
    },
    "近": {
        level: "N4",
        a_code: "z Z h I n <u>hznz</u> N",
        image: "手本/近.png"
    },
    "遠": {
        level: "N4",
        a_code: "h i H i <u>Hi</u> H <u>ZI</u> z n n <u>hznz</u> N",
        image: "手本/遠.png"
    },
    "重": {
        level: "N4",
        a_code: "z H i <u>hi</u> h h <u>Ih</u> H",
        image: "手本/重.png"
    },
    "軽": {
        level: "N4",
        a_code: "h i <u>hi</u> h h H I <u>hZ</u> N h I H",
        image: "手本/軽.png"
    },
    "早": {
        level: "N4",
        a_code: "I <u>HI</u> H H H I",
        image: "手本/早.png"
    },
    "速": {
        level: "N4",
        a_code: "H i <u>Hi</u> H I Z n n <u>hznz</u> N",
        image: "手本/速.png"
    },
    "遅": {
        level: "N4",
        a_code: "<u>Hi</u> H Z n z H h H I n <u>hznz</u> N",
        image: "手本/遅.png"
    },
    "広": {
        level: "N4",
        a_code: "i H Z <u>ZV</u> n",
        image: "手本/広.png"
    },
    "細": {
        level: "N4",
        a_code: "<u>zn</u> <u>Zv</u> n I z n I <u>HI</u> I H H",
        image: "手本/細.png"
    },
    "太": {
        level: "N4",
        a_code: "H Z n n",
        image: "手本/太.png"
    },
    "暑": {
        level: "N4",
        a_code: "I <u>HI</u> H H h I H Z I <u>HI</u> H H",
        image: "手本/暑.png"
    },
    "寒": {
        level: "N4",
        a_code: "i z Hw h I I h H Z N n n",
        image: "手本/寒.png"
    },
    "低": {
        level: "N4",
        a_code: "Z I z <u>Iv</u> H Nw h",
        image: "手本/低.png"
    },
    "短": {
        level: "N4",
        a_code: "z h H Z n H i <u>Hi</u> H n z H",
        image: "手本/短.png"
    },
    "弱": {
        level: "N4",
        a_code: "<u>hz</u> h <u>zhZw</u> <u>nv</u> <u>hz</u> h <u>zhZw</u> <u>nv</u>",
        image: "手本/弱.png"
    },
    "若": {
        level: "N4",
        a_code: "H n z Z H I <u>HI</u> H",
        image: "手本/若.png"
    },
    "静": {
        level: "N4",
        a_code: "h I h H I <u>hIw</u> h h Z <u>hz</u> <u>hi</u> H h Iw",
        image: "手本/静.png"
    },
    "有": {
        level: "N4",
        a_code: "Z H I <u>hIw</u> h h",
        image: "手本/有.png"
    },
    "心": {
        level: "N4",
        a_code: "z Nw nw n",
        image: "手本/心.png"
    },
    "同": {
        level: "N4",
        a_code: "I <u>HIw</u> h  i <u>hi</u> h",
        image: "手本/同.png"
    },
    "便": {
        level: "N4",
        a_code: "Z I H I <u>HI</u> H H Z n",
        image: "手本/便.png"
    },
    "利": {
        level: "N4",
        a_code: "z h I Z n i Iw",
        image: "手本/利.png"
    },
    "親": {
        level: "N4",
        a_code: "i h n z H h I Z n I <u>hI</u> h h h Z Lw",
        image: "手本/親.png"
    },
    "切": {
        level: "N4",
        a_code: "h L <u>HZw</u> Z",
        image: "手本/切.png"
    },
    "不": {
        level: "N4",
        a_code: "H Z I n",
        image: "手本/不.png"
    },
};

// HTMLの入力欄を取得します。
const input = document.getElementById("kanjiInput");

// 変換結果を表示する場所を取得します。
const result = document.getElementById("result");

// 「適用」ボタンを取得します。
const convertButton = document.getElementById("convertButton");

// 「PDF出力」ボタンを取得します。
const pdfButton = document.getElementById("pdfButton");

// アルファベット法かTPR法を選ぶ欄を取得します。
const methodSelect = document.getElementById("methodSelect");

// 1文字につき、練習用の空白マスを10個作る設定です。
const practiceBoxCount = 10;

// 1枚目に入れる文字数です。
const firstPageWorksheets = 5;

// 2枚目以降に入れる文字数です。
const otherPageWorksheets = 6;

// 作成済みのページ数に応じてPDF出力ボタンの状態を更新します。
function updatePageCount(count) {
    // 作成済みのページがあるときだけPDF出力できます。
    if (pdfButton) {
        pdfButton.disabled = count === 0;
    }
}

// PDFプレビュー用の1ページを作る関数です。
function createPage(pageNumber) {
    // 1ページ目だけ題名を表示します。
    const title = pageNumber === 1 ? `<h2 class="sheet-title">K-code学習　ワークシート</h2>` : "";

    // 1ページ目だけ専用のCSSクラスを追加します。
    const pageClass = pageNumber === 1 ? "pdf-page first-page" : "pdf-page";

    // 結果表示エリアの最後に、新しいPDFページを追加します。
    result.insertAdjacentHTML("beforeend", `
        <div class="page-frame">
            <section class="${pageClass}">
                ${title}
                <div class="page-number">-${pageNumber}-</div>
            </section>
        </div>
    `);

    // 追加したページ本体を返します。
    return result.lastElementChild.querySelector(".pdf-page");
}

// ページの中身が用紙の高さを超えたか調べる関数です。
function isPageOverflow(page) {
    // 縮小表示の影響を受けない寸法で、最後の練習欄が下余白に入っていないか調べます。
    const lastWorksheet = page.querySelector(".worksheet:last-child");
    if (!lastWorksheet) {
        return false;
    }
    const bottomLimit = page.clientHeight - parseFloat(getComputedStyle(page).paddingBottom);
    return lastWorksheet.offsetTop + lastWorksheet.offsetHeight > bottomLimit + 1;
}

// アルファベット法からTPR法を作ります。空白・改行・HTMLタグは変更しません。
function convertToTpr(code) {
    const words = {
        H: "よこ", h: "小さいよこ",
        I: "たて", i: "小さたて",
        Z: "ひだり", z: "小さいひだり",
        N: "みぎ", n: "小さいみぎ",
        L: "エル", l: "小さいエル",
        V: "チェック", v: "小さいチェック",
        w: "はね", W: "はね"
    };

    // 下線などのタグを残し、文字部分の記号だけを置き換えます。
    return code.replace(/(<[^>]+>|[^<]+)/g, (part) => {
        return part.startsWith("<") ? part : part.replace(/[HhIiZzNnLlVvwW]/g, (letter) => words[letter]);
    });
}

// K-codeの記号ごとに色を付ける関数です。
function colorizeKcode(code) {
    // タグをまたいでも、直前に使った色を引き継ぎます。
    let lastColorClass = "";
    // TPR法の言葉と、対応する文字色です。
    const tprColors = {
        "よこ": "kcode-red",
        "たて": "kcode-blue",
        "ひだり": "kcode-green",
        "みぎ": "kcode-yellow",
        "エル": "kcode-purple",
        "チェック": "kcode-orange"
    };

    // HTMLタグではない普通の文字部分だけに色付けします。
    return code.replace(/(<[^>]+>|[^<]+)/g, (part) => {
        // <u> や </u> などのHTMLタグは、そのまま返します。
        if (part.startsWith("<")) {
            return part;
        }

        return part.replace(/(?:小さい|ちいさい|小さ)\s*(?:よこ|たて|ひだり|みぎ|エル|チェック)|はねる|はね|よこ|たて|ひだり|みぎ|エル|チェック|[HhIiZzNnVvLl wW]/g, (letter) => {
            // 「小さい」は続く方向とまとめて、同じ色にします。
            const direction = letter.replace(/^(?:小さい|ちいさい|小さ)\s*/, "");
            // TPR法の方向を表す言葉に色を付けます。
            if (tprColors[direction]) {
                lastColorClass = tprColors[direction];
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // 「はね」と、登録済みの「はねる」は直前の色に合わせます。
            if ((letter === "はね" || letter === "はねる") && lastColorClass) {
                return `<span class="${lastColorClass}">${letter}</span>`;
            }
            // H/hは赤色にします。
            if (letter === "H" || letter === "h") {
                lastColorClass = "kcode-red";
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // I/iは青色にします。
            if (letter === "I" || letter === "i") {
                lastColorClass = "kcode-blue";
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // Z/zは緑色にします。
            if (letter === "Z" || letter === "z") {
                lastColorClass = "kcode-green";
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // N/nは黄色にします。
            if (letter === "N" || letter === "n") {
                lastColorClass = "kcode-yellow";
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // V/vはオレンジ色にします。
            if (letter === "V" || letter === "v") {
                lastColorClass = "kcode-orange";
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // L/lは紫色にします。
            if (letter === "L" || letter === "l") {
                lastColorClass = "kcode-purple";
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // wは直前の記号と同じ色にします。
            if ((letter === "w" || letter === "W") && lastColorClass) {
                return `<span class="${lastColorClass}">${letter}</span>`;
            }

            // 色を付けない文字はそのまま返します。
            return letter;
        });
    });
}

// ひらがなをカタカナに変換します。漢字や入力済みのカタカナはそのまま残します。
function hiraganaToKatakana(text) {
    // 分かれて入力された濁点・半濁点は、可能な場合は1文字にまとめます。
    return text.normalize("NFC").replace(/[ぁ-ゖゝゞ]/g, (char) => {
        return String.fromCharCode(char.charCodeAt(0) + 0x60);
    });
}

// 準備済みの薄い画像を読み込みます。file://でもCanvasの読み出し制限を受けません。
const tracingImageCache = new Map();
// 同じ画像の準備を共有し、作成処理とDownload処理が重なっても再度差し替えません。
const tracingPreparationTasks = new WeakMap();
async function prepareTracingImages() {
    await Promise.all(Array.from(result.querySelectorAll(".tracing-sample img"), (img) => {
        if (img.dataset.tracingReady) return;
        if (tracingPreparationTasks.has(img)) return tracingPreparationTasks.get(img);
        const source = img.getAttribute("src");
        const task = (async () => {
            if (!tracingImageCache.has(source)) {
                tracingImageCache.set(source, (async () => {
                    const original = new Image();
                    original.src = source.replace(/\/([^/]+)$/, "/なぞり/$1");
                    await original.decode();
                    return original.src;
                })());
            }
            try {
                img.src = await tracingImageCache.get(source);
                await img.decode();
                img.dataset.tracingReady = "true";
                img.closest(".tracing-sample").classList.add("tracing-prepared");
            } catch (error) {
                // 読み込みできない画像は元のお手本と薄さを維持します。
                tracingImageCache.delete(source);
                tracingPreparationTasks.delete(img);
                console.error("なぞり書き画像を準備できませんでした", error);
            }
        })();
        tracingPreparationTasks.set(img, task);
        return task;
    }));
}

// 小書きカタカナは、対応する通常サイズの文字からK-codeと画像を参照します。
const smallKanaBases = {
    "ァ": "ア", "ィ": "イ", "ゥ": "ウ", "ェ": "エ", "ォ": "オ",
    "ッ": "ツ", "ャ": "ヤ", "ュ": "ユ", "ョ": "ヨ", "ヮ": "ワ",
    "ヵ": "カ", "ヶ": "ケ"
};

// 入力された文字を練習シートに変換する関数です。
function convert() {
    // 入力欄または結果表示欄が見つからない場合は処理を止めます。
    if (!input || !result) {
        return;
    }

    // 前に表示していた結果を消します。
    result.innerHTML = "";

    // PDFプレビュー用の見た目を一度外します。
    result.classList.remove("pdf-preview");

    // 入力が空の場合は、枚数を0枚にして処理を止めます。
    if (!input.value.trim()) {
        updatePageCount(0);
        return;
    }

    // 結果表示欄をPDFプレビュー用の見た目にします。
    result.classList.add("pdf-preview");

    // 選ばれている方式を取得します。何もなければアルファベット法にします。
    const selectedMethod = methodSelect ? methodSelect.value : "a_code";

    // ひらがなをカタカナに直してから、対応する文字データを探します。
    const chars = Array.from(hiraganaToKatakana(input.value.trim()));
    // 未対応文字はページを作らず、プレビュー上部のメッセージにまとめます。
    const unsupportedChars = [];

    // 現在作っているPDFページを入れる変数です。
    let page;

    // 現在のページ番号を数える変数です。
    let pageNumber = 0;

    // 現在のページに何文字入れたか数える変数です。
    let worksheetCountOnPage = 0;

    // 入力された文字を1文字ずつ処理します。
    chars.forEach((char) => {
        const baseChar = smallKanaBases[char] || char;
        const isSmallKana = baseChar !== char;
        // 未対応文字は練習欄の数に含めず、印刷用ページにも追加しません。
        if (!Object.hasOwn(kcodeData, baseChar)) {
            unsupportedChars.push(char);
            return;
        }

        // 1ページ目なら5文字、2ページ目以降なら6文字を上限にします。
        const limit = pageNumber <= 1 ? firstPageWorksheets : otherPageWorksheets;

        // まだページがない、または現在のページが上限に達した場合は新しいページを作ります。
        if (!page || worksheetCountOnPage >= limit) {
            // ページ番号を1つ増やします。
            pageNumber++;

            // 新しいページなので、そのページ内の文字数を0に戻します。
            worksheetCountOnPage = 0;

            // 新しいPDFページを作ります。
            page = createPage(pageNumber);
        }

        // 入力された文字のデータが登録されている場合の処理です。
        if (kcodeData[baseChar]) {
            // その文字に対応するデータを取り出します。
            const data = kcodeData[baseChar];

            // アルファベット法だけを登録し、TPR法を選んだときに自動変換します。
            const alphabetCode = data.a_code ?? "";
            const selectedCode = selectedMethod === "t_code" ? convertToTpr(alphabetCode) : alphabetCode;

            // K-codeの記号を色分けしたHTMLに変換します。
            const coloredCode = colorizeKcode(selectedCode);

            // お手本画像がある場合は画像を表示し、ない場合は文字そのものを表示します。
            const sampleGlyph = data.image
                ? `<img class="sample-image" src="${data.image}" alt="${char}のお手本">`
                : baseChar;
            // 小書き文字だけ、小さくしたお手本をマスの左下に配置します。
            const sampleContent = isSmallKana
                ? `<span class="small-kana-glyph">${sampleGlyph}</span>`
                : sampleGlyph;

            // 練習用10マスのうち、お手本のすぐ隣だけ薄いお手本を入れます。
            const practiceBoxes = Array.from({ length: practiceBoxCount }, (_, index) => {
                return index === 0
                    ? `<div class="box tracing-box"><span class="tracing-sample">${sampleContent}</span></div>`
                    : `<div class="box"></div>`;
            }).join("");

            // PDFページの中に、1文字分の練習シートを追加します。
            page.insertAdjacentHTML("beforeend", `
                <div class="worksheet">
                    <div class="info-row">
                        <div class="info-item">
                            <span class="info-label">K-code</span>
                            <span class="kcode${selectedMethod === "t_code" ? " kcode-tpr" : ""}">${coloredCode}</span>
                        </div>
                        <span class="jlpt-level">JLPT:${data.level}</span>
                    </div>

                    <div class="grid-row">
                        <div class="box sample-box">${sampleContent}</div>
                        ${practiceBoxes}
                    </div>

                    <div class="underline-practice">
                        <span class="underline-sample">${char}</span>
                        <span class="underline-sample underline-tracing">${char}</span>
                    </div>
                </div>
            `);
        }
        // 現在のページに入れた文字数を1つ増やします。
        worksheetCountOnPage++;

        // 折り返しで用紙の高さを超えたら、今追加した練習欄を次のページへ送ります。
        // 1文字だけのページは移動を繰り返さないようにします。
        if (worksheetCountOnPage > 1 && isPageOverflow(page)) {
            const worksheet = page.lastElementChild;
            worksheet.remove();
            pageNumber++;
            page = createPage(pageNumber);
            page.appendChild(worksheet);
            worksheetCountOnPage = 1;
        }
    });

    // 用紙プレビューの上に表示し、印刷時はCSSの.error指定で非表示にします。
    if (unsupportedChars.length > 0) {
        const message = document.createElement("section");
        message.className = "error unsupported-characters";
        message.setAttribute("role", "status");
        message.textContent = `対応していない文字：${[...new Set(unsupportedChars)].join("，")} `;
        result.prepend(message);
    }

    // 作られたPDFページの数を数えて、画面に表示します。
    updatePageCount(result.querySelectorAll(".pdf-page").length);
    void prepareTracingImages();
}

// PDF出力ボタンを押したときに動く関数です。
async function outputPdf() {
    // 作成済みのページがなければ処理を止めます。
    if (!result || !result.querySelector(".pdf-page")) {
        return;
    }

    await prepareTracingImages();
    await Promise.all(Array.from(result.querySelectorAll("img"), img => img.decode().catch(() => {})));
    await document.fonts.ready;
    // 画像を反映してから印刷画面を開きます。
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    window.print();
}

// HTMLのonclickなどからconvert関数を呼べるようにします。
window.convert = convert;

// HTMLのonclickなどからoutputPdf関数を呼べるようにします。
window.outputPdf = outputPdf;

// 「作成」ボタンが存在する場合だけ処理します。
if (convertButton) {
    // 作成ボタンを押せる状態にします。
    convertButton.disabled = false;

    // 作成ボタンを押したらconvert関数を実行します。
    convertButton.addEventListener("click", convert);
}

// 「PDF出力」ボタンが存在する場合だけ処理します。
if (pdfButton) {
    // PDF出力ボタンを押したらoutputPdf関数を実行します。
    pdfButton.addEventListener("click", outputPdf);
}

// 初期状態ではページがないため、PDF出力を無効にします。
updatePageCount(0);

// 使い方を開きます。閉じるボタンとEscapeキーで元の画面に戻れます。
const usageButton = document.getElementById("usageButton");
const usageDialog = document.getElementById("usageDialog");
if (usageButton && usageDialog) {
    usageButton.addEventListener("click", () => usageDialog.showModal());
}
