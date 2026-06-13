// ==========================================================================
// Translation Dictionary
// ==========================================================================
const translations = {
    ko: {
        "nav-title": "부산 감성 여행 가이드 🌊",
        "hero-badge": "Welcome to Busan!",
        "hero-title": "바다와 감성이 머무는 도시, 부산",
        "hero-desc": "일본인 친구를 위한 맞춤형 2박 3일 힐링 코스 지도입니다. 부산의 매력을 가득 느껴보세요!",
        "tab-all": "전체 일정",
        "tab-day1": "Day 1: 바다 & 해산물",
        "tab-day2": "Day 2: 감성 카페",
        "tab-day3": "Day 3: 핫플레이스",
        "map-header-title": "부산 여정 지도",
        
        // Day Headers
        "day1-title": "오션뷰 & 싱싱한 해산물",
        "day1-subtitle": "부산에 오자마자 드넓은 바다와 미식을 경험합니다.",
        "day2-title": "인생샷 가득, 예쁜 카페 탐방",
        "day2-subtitle": "감성 넘치는 마을 골목과 바다가 내다보이는 아름다운 카페를 방문합니다.",
        "day3-title": "핫플레이스 탐방 & 영혼의 돼지국밥",
        "day3-subtitle": "알록달록한 문화예술 마을을 여행하고, 뜨끈한 로컬 소울푸드로 여행을 마무리합니다.",
        
        // Tags
        "tag-scenic": "경치맛집",
        "tag-food": "해산물",
        "tag-night": "야경",
        "tag-photo": "포토존",
        "tag-cafe": "오션뷰카페",
        "tag-hip": "트렌디",
        "tag-culture": "문화/예술",
        "tag-market": "전통시장",
        "tag-local": "로컬푸드",
        
        // Day 1 Spots
        "spot1-name": "해운대 미포 해변 & 해변열차",
        "spot1-desc": "해운대 미포에서 송정까지 운행하는 아름다운 블루라인 해변열차를 탑승합니다. 바다 바로 옆을 달리는 철길을 보며 힐링할 수 있어요.",
        "spot1-tips": "💡 팁: 해 질 녘이나 이른 오후에 타면 윤슬이 빛나는 멋진 바다 사진을 찍을 수 있어요. 미리 모바일로 예매하는 것을 추천합니다.",
        
        "spot2-name": "청사포 조개구이촌",
        "spot2-desc": "빨간 등대와 파란 바다가 어우러진 조개구이 마을입니다. 바다 바로 앞 노포 감성 가게에서 파도 소리를 들으며 신선한 조개와 장어구이를 즐깁니다.",
        "spot2-tips": "💡 팁: '수민이네' 또는 '끝집'이 유명합니다. 치즈와 버터를 듬뿍 얹어 구워 먹는 부산식 조개구이를 꼭 맛보세요!",
        
        "spot3-name": "광안리 해수욕장 & 민락수변공원",
        "spot3-desc": "부산 밤바다의 대명사! 형형색색 빛나는 광안대교 야경을 감상합니다. 근처 민락회타운에서 싱싱한 활어회를 포장하거나 횟집에서 야경을 바라보며 저녁 2차를 즐깁니다.",
        "spot3-tips": "💡 팁: 매주 토요일 저녁에는 광안리 해변에서 환상적인 '광안리 M 드론 라이트쇼'가 열립니다. 놓치지 마세요!",
        
        // Day 2 Spots
        "spot4-name": "영도 흰여울문화마을",
        "spot4-desc": "절벽을 따라 아기자기한 주택들이 모여 있는 마을로, '부산의 산토리니'라고 불립니다. 영화 촬영지로도 유명하며 파란 바다를 배경으로 인생샷을 남길 수 있는 예쁜 골목이 많습니다.",
        "spot4-tips": "💡 팁: 해안터널 포토존에서 줄을 서서 꼭 역광 실루엣 사진을 찍어보세요.",
        
        "spot5-name": "영도 신기산업 & 오션뷰 카페거리",
        "spot5-desc": "흰여울마을 곳곳에 숨겨진 감성 오션뷰 카페(예: 에테르, 손목서가) 혹은 영도 산자락에 위치한 개성 넘치는 대형 카페에서 바다를 바라보며 향긋한 커피와 맛있는 디저트를 즐깁니다.",
        "spot5-tips": "💡 팁: 창가 자리는 인기가 많으니 오픈 직후나 평일 방문이 꿀팁! 바닷바람이 시원하게 통하는 테라스 자리를 노려보세요.",
        
        "spot6-name": "전포 카페거리 (서면)",
        "spot6-desc": "부산 도심 속 젊은이들의 성지입니다. 공구 공장들이 밀집해 있던 골목이 이색적이고 트렌디한 개인 카페, 소품샵, 맛집들로 재탄생해 독특한 빈티지 감성을 자아냅니다.",
        "spot6-tips": "💡 팁: 아기자기한 소품샵(오브젝트, 마가린상점 등) 투어를 함께 돌면 친구에게 뜻깊은 기념품을 선물해 줄 수 있어요.",
        
        // Day 3 Spots
        "spot7-name": "감천문화마을",
        "spot7-desc": "산자락을 따라 형형색색의 집들이 계단식으로 늘어선 아름다운 마을입니다. 골목 구석구석 설치된 미술작품과 파스텔톤의 풍경이 마치 동화 속에 온 듯한 기분을 줍니다.",
        "spot7-tips": "💡 팁: '어린왕자와 사막여우' 조각상이 있는 포토존은 늘 줄이 깁니다. 오전 일찍 방문해 여유롭게 사진을 찍는 것을 추천해요.",
        
        "spot8-name": "남포동 BIFF 광장 & 국제시장",
        "spot8-desc": "부산 영화의 발상지인 BIFF 광장과 대표적 전통시장인 국제시장, 깡통시장입니다. 영화 '국제시장'의 배경을 둘러보고 씨앗호떡, 떡볶이 등 풍성한 길거리 음식을 먹어봅니다.",
        "spot8-tips": "💡 팁: 남포동에서 꼭 '승기 찹쌀씨앗호떡'을 드셔보세요. 고소하고 달달한 맛이 일품입니다!",
        
        "spot9-name": "부산역 초량 돼지국밥 골목",
        "spot9-desc": "부산 여행의 대미를 장식할 원조 돼지국밥입니다. 진하게 우려낸 뽀얀 돼지 사골 국물에 부드러운 고기가 가득 들어있어 부추 무침을 듬뿍 넣어 먹는 부산 최고의 소울푸드입니다.",
        "spot9-tips": "💡 팁: 부산역 근처의 '본전돼지국밥' 또는 '대건명가'는 잡내가 없고 깊은 국물 맛으로 유명해 기차 타기 전 든든한 한 끼로 완벽합니다.",
        
        // Travel Assistant Section
        "assistant-title": "🧳 여행 도우미 포켓 가이드",
        "assistant-desc": "일본인 친구와 소통할 때 유용한 필수 한국어 회화와 교통 꿀팁을 확인하세요.",
        "helper-phrase-title": "서바이벌 한마디 (카드 클릭!)",
        "helper-phrase-desc": "탭하면 발음 및 일본어 번역이 보입니다.",
        "helper-info-title": "알아두면 유용한 부산 여행 팁",
        
        // Travel Tips Detail
        "tip-trans-title": "교통카드 통합 안내",
        "tip-trans-desc": "일본에서 사용하던 IC 교통카드는 불가하나, 한국의 교통카드(티머니, 캐시비 등) 및 트래블로그/트래블월렛 카드로 부산 지하철 및 버스를 완벽하게 탈 수 있습니다.",
        "tip-taxi-title": "택시 호출 앱 추천",
        "tip-taxi-desc": "길가에서 택시를 잡기 어렵다면, 일본에서도 사용하는 'Uber' 앱을 켜면 한국의 UT 택시가 바로 매칭되어 결제까지 한 번에 편리하게 이용할 수 있습니다.",
        "tip-luggage-title": "물품보관소 & 무료 짐 보관",
        "tip-luggage-desc": "부산역 2층이나 주요 지하철 역사(Haeundae, Nampo 등)에는 짐 보관함이 잘 되어 있어 무거운 캐리어를 보관하고 가볍게 다닐 수 있습니다."
    },
    ja: {
        "nav-title": "釜山エモーショナル旅行ガイド 🌊",
        "hero-badge": "釜山へようこそ！ (Welcome to Busan)",
        "hero-title": "海と感性が息づく街、釜山",
        "hero-desc": "日本の友達のためのオーダーメイド2泊3日のヒーリングコースマップです。釜山の魅力をたっぷり感じてください！",
        "tab-all": "すべての旅程",
        "tab-day1": "Day 1: 海とシーフード",
        "tab-day2": "Day 2: 感性カフェ",
        "tab-day3": "Day 3: ホットプレイス",
        "map-header-title": "釜山旅程マップ",
        
        // Day Headers
        "day1-title": "オーシャンビュー＆新鮮なシーフード",
        "day1-subtitle": "釜山に到着後すぐに、広大な海とグルメを体験します。",
        "day2-title": "人生ショット満載、可愛いカフェ巡り",
        "day2-subtitle": "情緒あふれる街の路地と、海が見渡せる美しいカフェを訪れます。",
        "day3-title": "ホットプレイス巡り＆ソウルフードの豚クッパ",
        "day3-subtitle": "カラフルな文化芸術の村を旅し、温かい地元のソウルフードで旅を締めくくります。",
        
        // Tags
        "tag-scenic": "絶景スポット",
        "tag-food": "シーフード",
        "tag-night": "夜景",
        "tag-photo": "フォトスポット",
        "tag-cafe": "海ビューカフェ",
        "tag-hip": "トレンディ",
        "tag-culture": "文化・アート",
        "tag-market": "伝統市場",
        "tag-local": "ローカルフード",
        
        // Day 1 Spots
        "spot1-name": "海雲台ミ포海岸＆海辺列車",
        "spot1-desc": "海雲台（ヘウンデ）の尾浦（ミポ）から松亭（ソンジョン）まで運行する、美しいブルーラインの海辺列車に乗ります。海のすぐそばを走る線路を見ながら癒されます。",
        "spot1-tips": "💡 ヒント：夕暮れ時や早い午後に乗ると、きらきら輝く海の素敵な写真が撮れます。事前にネット予約しておくことをお勧めします。",
        
        "spot2-name": "青沙浦の貝焼き村",
        "spot2-desc": "赤い灯台と青い海が調和する貝焼きの街です。海の目の前にあるレトロ感あふれるお店で、波の音を聞きながら新鮮な貝焼きやアナゴ焼きを楽しみます。",
        "spot2-tips": "💡 ヒント：「スミニネ」や「クッチッ」が有名です。チーズとバターをたっぷり乗せて焼く釜山式の貝焼きをぜひ味わってみてください！",
        
        "spot3-name": "広安里海水浴場＆民楽水辺公園",
        "spot3-desc": "釜山の夜の海の代名詞！色とりどりに輝く広安大橋の夜景を鑑賞します。近くの「民楽（ミルラク）刺身タウン」で新鮮な刺身をテイクアウトするか、刺身店から夜景を眺めながら晩酌を楽しみます。",
        "spot3-tips": "💡 ヒント：毎週土曜日の夜には、広安里（クァンアンリ）のビーチで幻想的な「広安里Mドローンライトショー」が開催されます。お見逃しなく！",
        
        // Day 2 Spots
        "spot4-name": "影島ヒンヨウル文化村",
        "spot4-desc": "崖に沿ってこぢんまりとした住宅が集まっている村で、「釜山のサントリーニ」と呼ばれています。映画のロケ地としても有名で、青い海を背景に人生ショットが残せる綺麗な路地がたくさんあります。",
        "spot4-tips": "💡 ヒント：海岸トンネルのフォトスポットで並んで、逆光のシルエット写真をぜひ撮ってみてください。",
        
        "spot5-name": "影島シンギ産業＆オーシャンビューカフェ通り",
        "spot5-desc": "ヒンヨウル村のあちこちに隠れたオーシャンビューカフェ（例：エーテル、ソンモクソガ）や、影島の山裾に位置する個性あふれる大型カフェで、海を眺めながら香り高いコーヒーと美味しいデザートを楽しみます。",
        "spot5-tips": "💡 ヒント：窓側の席は人気があるので、オープン直後や平日の訪問がおすすめ！潮風が心地よく通るテラス席を狙ってみましょう。",
        
        "spot6-name": "田浦カフェ通り（西面）",
        "spot6-desc": "釜山の都心にある若者たちの聖地です。かつて工具工場が集まっていた路地が、個性的でトレンディなカフェ, 雑貨店, グルメ店に生まれ変わり、独特なヴィンテージ感を醸し出しています。",
        "spot6-tips": "💡 ヒント：可愛い雑貨店（Object、マーガリン商店など）巡りを一緒にすると、友達に心のこもったお土産をプレゼントできます。",
        
        // Day 3 Spots
        "spot7-name": "甘川文化村",
        "spot7-desc": "山の斜面に沿ってカラフルな家々が階段状に立ち並ぶ美しい村です。路地のいたるところに設置された美術作品とパステルカラーの風景が、まるで童話の世界に来たような気分にさせてくれます。",
        "spot7-tips": "💡 ヒント：「星の王子さまと砂漠のキツネ」の彫刻があるフォトスポットはいつも行列ができています。午前中の早い時間に訪れて、ゆったり写真を撮るのがおすすめです。",
        
        "spot8-name": "南浦洞BIFF広場＆国際市場",
        "spot8-desc": "釜山映画の発祥地であるBIFF広場と、代表的な伝統市場である国際市場、カントン市場です。映画『国際市場で逢いましょう』の舞台を散策し、シアホットクやトッポギなど、豊富なストリートフードを食べてみます。",
        "spot8-tips": "💡 ヒント：南浦洞（ナンポドン）でぜひ「スンギもち米シアホットク」を食べてみてください。香ばしくて甘い味が絶品です！",
        
        "spot9-name": "釜山駅草梁デジクッパ通り",
        "spot9-desc": "釜山旅行のフィナーレを飾る本場のデジクッパ（豚クッパ）です。じっくり煮込んだ白い豚骨スープに柔らかい肉がたっぷりと入っており、ニラ和えをたっぷり入れて食べる釜山最高のソウルフードです。",
        "spot9-tips": "💡 ヒント：釜山駅近くの「本銭（ボンジョン）デジクッパ」や「大建名家（デゴンミョンガ）」は、臭みがなく深い味わいのスープで有名で、列車に乗る前の心強い食事として完璧です。",
        
        // Travel Assistant Section
        "assistant-title": "🧳 旅行アシスタント ポケットガイド",
        "assistant-desc": "日本の友達とコミュニケーションをとる時に役立つ必須韓国語会話と交通のコツを確認しましょう。",
        "helper-phrase-title": "サバイバル韓国語（カードをクリック！）",
        "helper-phrase-desc": "タップすると発音と日本語の翻訳が表示されます。",
        "helper-info-title": "知っておくと役立つ釜山旅行のヒント",
        
        // Travel Tips Detail
        "tip-trans-title": "交通カードのご案内",
        "tip-trans-desc": "日本で使っていた交通系ICカードは使えませんが、韓国の交通カード（T-money、Cashbeeなど）や旅行用プリペイドカード（ト래블로그 / 트래블월렛）で釜山の地下鉄やバスに問題なく乗ることができます。",
        "tip-taxi-title": "タクシー配車アプリの推奨",
        "tip-taxi-desc": "路上でタクシーを拾うのが難しい場合は、日本でも使っている「Uber」アプリを開くと、韓国のUTタクシーがすぐにマッチングされ、決済まで一度に便利に利用できます。",
        "tip-luggage-title": "コインロッカー＆無料荷物預かり",
        "tip-luggage-desc": "釜山駅2階や主要な地下鉄駅（Haeundae、Nampoなど）にはコインロッカーが完備されており、重いスーツケースを預けて身軽に移動できます。"
    }
};

// ==========================================================================
// Locations Coordinates and Info for Leaflet Map
// ==========================================================================
const spotsData = [
    {
        id: 1,
        day: 1,
        lat: 35.1583,
        lng: 129.1601,
        translations: {
            ko: { name: "해운대 미포 해변 & 해변열차", desc: "바다 철길을 달리는 아름다운 오션뷰 열차" },
            ja: { name: "海雲台ミポ海岸＆海辺列車", desc: "海の線路を走る美しいオーシャンビュー列車" }
        }
    },
    {
        id: 2,
        day: 1,
        lat: 35.1614,
        lng: 129.1763,
        translations: {
            ko: { name: "청사포 조개구이촌", desc: "파도 소리 들으며 맛보는 싱싱한 조개구이" },
            ja: { name: "青沙浦の貝焼き村", desc: "波の音を聞きながら味わう新鮮な貝焼き" }
        }
    },
    {
        id: 3,
        day: 1,
        lat: 35.1532,
        lng: 129.1189,
        translations: {
            ko: { name: "광안리 해수욕장", desc: "형형색색 아름답게 빛나는 광안대교 야경 명소" },
            ja: { name: "広安里海水浴場", desc: "美しく輝く広安大橋の夜景スポット" }
        }
    },
    {
        id: 4,
        day: 2,
        lat: 35.0788,
        lng: 129.0436,
        translations: {
            ko: { name: "영도 흰여울문화마을", desc: "절벽 위 바다를 품은 아기자기한 감성 마을" },
            ja: { name: "影島ヒンヨウル文化村", desc: "崖の上の海を抱いたこぢんまりとした感性村" }
        }
    },
    {
        id: 5,
        day: 2,
        lat: 35.0792,
        lng: 129.0450,
        translations: {
            ko: { name: "영도 오션뷰 카페거리", desc: "바다가 한눈에 시원하게 들어오는 전망 좋은 카페" },
            ja: { name: "影島オーシャンビューカフェ通り", desc: "海が一望できる見晴らしの良いカフェ" }
        }
    },
    {
        id: 6,
        day: 2,
        lat: 35.1555,
        lng: 129.0645,
        translations: {
            ko: { name: "전포 카페거리 (서면)", desc: "도심 속 개성 넘치는 골목 카페와 트렌디 샵" },
            ja: { name: "田浦カフェ通り（西面）", desc: "都心の個性あふれる路地カフェとトレンディショップ" }
        }
    },
    {
        id: 7,
        day: 3,
        lat: 35.0975,
        lng: 129.0093,
        translations: {
            ko: { name: "감천문화마을", desc: "한국의 마추픽추, 파스텔톤 계단식 예술 골목" },
            ja: { name: "甘川文化村", desc: "韓国のマチュピチュ、パステルカラーの階段式アート路地" }
        }
    },
    {
        id: 8,
        day: 3,
        lat: 35.0985,
        lng: 129.0298,
        translations: {
            ko: { name: "남포동 BIFF 광장 & 국제시장", desc: "길거리 음식과 역사가 살아 숨 쉬는 활기찬 시장" },
            ja: { name: "南浦洞BIFF広場＆国際市場", desc: "ストリートフードと歴史が息づく活気ある市場" }
        }
    },
    {
        id: 9,
        day: 3,
        lat: 35.1147,
        lng: 129.0398,
        translations: {
            ko: { name: "부산역 초량 돼지국밥 골목", desc: "속까지 든든하게 채우는 깊은 육수의 돼지국밥" },
            ja: { name: "釜山駅草梁デジクッパ通り", desc: "お腹を満たしてくれる深いスープのデジクッパ" }
        }
    }
];

// Global App State Variables
let currentLanguage = 'ko';
let map;
let markerLayerGroup;
const markersMap = new Map(); // to store references to Leaflet markers

// ==========================================================================
// Initialization on Page Load
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Check local storage for language, default to 'ko'
    const savedLang = localStorage.getItem("preferred_lang");
    if (savedLang === 'ko' || savedLang === 'ja') {
        currentLanguage = savedLang;
    }
    
    // Set UI language indicators correctly
    updateLanguageButtons();
    setLanguage(currentLanguage);

    // 2. Initialize Leaflet Map
    initMap();

    // 3. Attach filter tab listeners
    setupFilters();
    
    // 4. Set up smooth scroll offset for timeline cards
    setupCardHighlightingOnScroll();
});

// ==========================================================================
// Translation Engine functions
// ==========================================================================
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("preferred_lang", lang);
    
    // Update HTML page attribute
    document.documentElement.setAttribute('lang', lang);

    // Translate all static nodes with data-i18n
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            // Check if element is Tip or Spot card to preserve the "💡 팁:" or "💡 ヒント：" prefix if desired,
            // but we can also just let the dictionary handle the whole text (which includes the prefix emoji).
            el.innerHTML = translations[lang][key];
        }
    });

    updateLanguageButtons();
    
    // Rebind popups on map with translated texts
    updateMapPopups();
}

function updateLanguageButtons() {
    const koBtn = document.getElementById("lang-ko");
    const jaBtn = document.getElementById("lang-ja");
    
    if (currentLanguage === 'ko') {
        koBtn.classList.add("active");
        jaBtn.classList.remove("active");
    } else {
        jaBtn.classList.add("active");
        koBtn.classList.remove("active");
    }
}

// ==========================================================================
// Leaflet Map Logic
// ==========================================================================
function initMap() {
    // Center of Busan that spans from Gamcheon (West) to Cheongsapo (East)
    const centralBusan = [35.1279, 129.0905];
    
    // Create Map instance with light styled Voyager tiles
    map = L.map('map', {
        center: centralBusan,
        zoom: 11,
        scrollWheelZoom: false, // prevent accidental zoom when scrolling page
        zoomControl: true
    });
    
    // CartoDB Voyager Tiles (Beautiful light aesthetic tailored to highlights)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    markerLayerGroup = L.layerGroup().addTo(map);

    // Add markers
    renderMarkers();
}

function renderMarkers() {
    // Clear old markers if any
    markerLayerGroup.clearLayers();
    markersMap.clear();

    spotsData.forEach(spot => {
        const dayClass = `marker-day-${spot.day}`;
        
        // Custom Styled Icon HTML
        const customIcon = L.divIcon({
            className: `custom-marker ${dayClass}`,
            html: `<span>${spot.id}</span>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14],
            popupAnchor: [0, -14]
        });

        // Create Marker
        const marker = L.marker([spot.lat, spot.lng], { icon: customIcon })
            .addTo(markerLayerGroup);

        // Bind popup container (content loaded dynamically depending on language)
        marker.bindPopup('', {
            className: 'custom-popup',
            closeButton: false
        });

        // Store reference
        markersMap.set(spot.id, marker);

        // Set up marker click triggers: scroll to corresponding timeline card
        marker.on('click', () => {
            highlightTimelineCard(spot.id, true);
        });
    });

    updateMapPopups();
}

function updateMapPopups() {
    markersMap.forEach((marker, id) => {
        const spot = spotsData.find(s => s.id === id);
        if (!spot) return;

        const info = spot.translations[currentLanguage];
        const dayLabel = currentLanguage === 'ko' ? `Day ${spot.day}` : `Day ${spot.day}`;
        const dayColorClass = `day-${spot.day}-color`;

        const popupHTML = `
            <div class="popup-container">
                <span class="popup-day-badge ${dayColorClass}">${dayLabel}</span>
                <div class="popup-title">${info.name}</div>
                <div class="popup-desc">${info.desc}</div>
            </div>
        `;
        marker.setPopupContent(popupHTML);
    });
}

// Focus map on a coordinates and open specific marker popup
function focusMarker(lat, lng, zoom = 14) {
    map.setView([lat, lng], zoom, {
        animate: true,
        duration: 0.8
    });
    
    // Find the marker by lat/lng and open popup
    const spot = spotsData.find(s => Math.abs(s.lat - lat) < 0.0001 && Math.abs(s.lng - lng) < 0.0001);
    if (spot) {
        const marker = markersMap.get(spot.id);
        if (marker) {
            setTimeout(() => {
                marker.openPopup();
            }, 500);
            
            // Highlight the corresponding card (no scrolling since it was clicked from the card)
            highlightTimelineCard(spot.id, false);
        }
    }
}

// ==========================================================================
// Filters & Day Selection
// ==========================================================================
function setupFilters() {
    const tabs = document.querySelectorAll(".filter-tab");
    
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach(t => t.classList.remove("active"));
            
            // Add active to clicked tab
            tab.classList.add("active");
            
            const selectedDay = tab.getAttribute("data-day");
            filterItinerary(selectedDay);
        });
    });
}

function filterItinerary(day) {
    const dayGroups = document.querySelectorAll(".day-group");
    const activeMarkers = [];

    dayGroups.forEach(group => {
        const groupDay = group.getAttribute("data-day");
        
        if (day === "all" || groupDay === day) {
            group.classList.remove("hidden");
            group.style.opacity = "1";
            group.style.transform = "translateY(0)";
        } else {
            group.classList.add("hidden");
            group.style.opacity = "0";
            group.style.transform = "translateY(15px)";
        }
    });

    // Update map markers visibility and bounds
    spotsData.forEach(spot => {
        const marker = markersMap.get(spot.id);
        if (!marker) return;

        if (day === "all" || spot.day === parseInt(day)) {
            if (!map.hasLayer(marker)) {
                marker.addTo(map);
            }
            activeMarkers.push(marker);
        } else {
            if (map.hasLayer(marker)) {
                map.removeLayer(marker);
            }
        }
    });

    // Dynamically adjust map bounds to active markers
    if (activeMarkers.length > 0) {
        const group = new L.featureGroup(activeMarkers);
        map.fitBounds(group.getBounds(), {
            padding: [50, 50],
            animate: true,
            duration: 1.0
        });
    }
}

// ==========================================================================
// Timeline / Card Activation Logic
// ==========================================================================
function highlightTimelineCard(spotId, scrollIntoView = false) {
    // Remove all highlights
    document.querySelectorAll(".spot-card").forEach(card => {
        card.classList.remove("highlighted");
    });

    // Find and highlight matching card
    const allCards = document.querySelectorAll(".spot-card");
    let targetCard = null;
    
    // We match cards based on title (or order)
    // To match correctly, let's grab cards based on index + 1 = spotId
    if (allCards[spotId - 1]) {
        targetCard = allCards[spotId - 1];
        targetCard.classList.add("highlighted");
    }

    // Scroll if requested
    if (scrollIntoView && targetCard) {
        // Find if this day group is active. If not, trigger the filter click
        const parentGroup = targetCard.closest(".day-group");
        const day = parentGroup.getAttribute("data-day");
        
        // If the day is currently hidden, we should toggle to "All" or that specific Day
        const activeTab = document.querySelector(".filter-tab.active");
        const activeDay = activeTab.getAttribute("data-day");
        if (activeDay !== "all" && activeDay !== day) {
            // Auto click the target day tab
            const targetTab = document.querySelector(`.filter-tab[data-day="${day}"]`);
            if (targetTab) targetTab.click();
        }

        // Perform scroll
        targetCard.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }
}

function setupCardHighlightingOnScroll() {
    // Highlight matching map markers when user manually scrolls through timeline cards
    // Using Intersection Observer
    const cards = document.querySelectorAll(".spot-card");
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -50% 0px", // triggers when card occupies center of screen
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find card index
                const cardIndex = Array.from(cards).indexOf(entry.target);
                const spotId = cardIndex + 1;
                
                // Add highlight to card (visual feedback only, no scrolling)
                cards.forEach(c => c.classList.remove("highlighted"));
                entry.target.classList.add("highlighted");

                // Highlight/bounce marker on map silently
                const marker = markersMap.get(spotId);
                if (marker) {
                    // Open marker popup in place
                    marker.openPopup();
                }
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
}
