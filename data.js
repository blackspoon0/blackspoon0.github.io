/* ==========================================================================
   data.js — 이 파일만 고치면 홈페이지 내용이 바뀝니다.
   ==========================================================================
   images/ · thumbs/ · web/ 세 폴더가 모두 같은 파일 이름을 씁니다.
   (축소본만 확장자가 .jpg 로 통일돼 있습니다. 여기에는 원본 이름 그대로 적으세요.)
   ※ 파일명은 반드시 영문·숫자로. 한글 이름은 GitHub 에 올라가다 조용히 빠집니다.

   [작업 추가하는 법]
   1. images/Personal 안에 "YYYYMM_제목" 폴더를 만들고 이미지를 넣습니다.
   2. thumbs/ 와 web/ 에도 같은 경로·같은 이름의 축소본(.jpg)을 넣습니다.
      (귀찮으면 "새 폴더 넣었어, 축소본 만들어줘" 라고 말씀하세요)
   3. 아래 groups 맨 위에 한 덩어리를 복사해 붙이고 folder/title/date/cover/files 를 고칩니다.
   ========================================================================== */

const SITE = {
  name:     "CHO EUNSEO",
  nameKo:   "조은서",
  role:     "3D Artist",
  /* 이름 아래 한 줄 소개. 배열로 적으면 줄바꿈됩니다. */
  tagline: [
    "Always giving my best in every project,",
    "Constantly growing to next step"
  ],
  email:    "blackspoon0@gmail.com",

  /* 첫 화면 배경.
     heroVideo 가 있으면 영상이 소리 없이 자동 반복 재생되고,
     hero 는 영상이 뜨기 전/재생이 막혔을 때 보이는 정지 이미지입니다. */
  heroVideo: "movies/carriage/Carriage_Movie.mp4",
  heroVideoDelay: 1500,      // 들어온 뒤 영상이 시작되기까지 기다리는 시간(밀리초)
  hero:      "web/Personal/202510_Carriage/Carriage_West3.jpg",

  /* 탭 아이콘 */
  favicon: "favicon.png",

  /* About 본문. 한 줄이 한 문단입니다.
     문장 안에 \n 을 넣으면 그 자리에서 줄이 바뀝니다. (좁은 화면에서는 자동으로 더 접힙니다) */
  about: [
    "컴퓨터공학을 전공하며 익힌 개발자의 시각으로, 작업의 리소스와 파이프라인을 함께 고려합니다.\n기술적 제약과 제작 기준 속에서도 디테일과 완성도를 유지하는 것이 배경 아티스트의 역량이라고 생각하며,\n주어진 자원 안에서 최선의 결과물을 내는 것을 목표로 꾸준히 발전해 나가고 있습니다."
  ],

  /* About 맨 위 프로필 블록 */
  profile: {
    nameEn: "Cho Eunseo",
    nameKo: "조은서",
    role:   "3D Artist / Prop & Environment",
    focus:  "Hard-surface, Props, Environment, Lighting",
    born:   "1999.12",           // 빼려면 "" 로 두세요
    /* 프로필 사진. 파일이 없으면 사진 없이 나옵니다.
       폴더 맨 위(index.html 옆)에 profile.jpg 를 넣으면 바로 뜹니다. */
    photo:  "profile.jpg"
  },

  /* 학력 — 줄을 추가하거나 지우면 그대로 반영됩니다. */
  education: [
    { when: "2023.03", what: "동양미래대학교 졸업" },
    { when: "2024.03", what: "동양미래대학교 학사 졸업" },
    { when: "2024~",   what: "Study" }
  ],

  /* 사용 툴 — group 은 소제목, items 는 그 아래 목록 */
  skills: [
    { group: "3D / Texturing",
      items: ["3ds Max", "ZBrush", "Substance 3D Painter", "Substance 3D Designer",
              "Marmoset", "Photoshop"] },
    { group: "Engine",
      items: ["Unreal Engine 5", "Unity"] },
    { group: "Programming",
      items: ["JavaScript", "Python", "C"] }
  ],

  /* 수상 */
  awards: [
    { when: "2023", what: "스마트프로젝트 경진대회 장려상" },
    { when: "2022", what: "동양미래EXPO 장려상" }
  ],

  /* url 이 비어 있으면 화면에 안 나옵니다. */
  links: [
    { label: "ArtStation", url: "" },
    { label: "YouTube",    url: "" }
  ]
};

/* 웹용 축소본 사용 여부.
   thumbs/ = 카드·썸네일용 (긴 변 900px)
   web/    = 크게 보기용 (긴 변 1700px)
   축소본이 없으면 자동으로 images/ 원본을 씁니다. */
const USE_THUMBS = true;
const USE_WEB    = true;
const THUMB_DIR  = "thumbs";
const WEB_DIR    = "web";

/* ==========================================================================
   작업 목록   date: "YYYY-MM" 또는 "YYYY" (비우면 날짜 없이 표시)
   --------------------------------------------------------------------------
   desc / info 는 카드를 눌렀을 때 오른쪽 패널에 나오는 글입니다.
   비워 두면 그 부분은 아예 안 보입니다. 이렇게 적으면 됩니다.

     desc: "빅토리안 시대 응접실을 기준으로 제작했습니다.\n" +
           "타일링 텍스처를 최대한 재사용하면서 실루엣으로 차이를 만들었습니다.",

     info: [
       { k: "Software", v: "3ds Max · ZBrush · Substance 3D Painter" },
       { k: "Render",   v: "Marmoset Toolbag" },
       { k: "Tris",     v: "48,000" },
       { k: "Texture",  v: "2048 × 2048" }
     ],

   k 는 왼쪽 항목 이름, v 는 내용입니다. 줄 수는 원하는 만큼 늘리면 됩니다.

   labels 는 오른쪽 썸네일 밑에 붙는 이름입니다. 안 적으면 파일 이름이 그대로 쓰입니다.

     labels: {
       "Knife1.jpg":    "Detail Render",
       "Knife_PBR1.jpg":"Texture Breakdown"
     },
   ========================================================================== */

const CATEGORIES = [
  {
    id: "personal",
    label: "Personal Works",
    dir: "images/Personal",
    groups: [
      {
        folder: "202606_Axegun",
        title:  "Axegun",
        date:   "2026-06",
        cover:  "Axegun_Shadow_Camera 2_FullQuality.png",
        desc:   "도끼와 화승총을 하나로 합친 판타지 무기 콘셉트의 Axegun.\n금속과 목재, 가죽이 한 오브젝트 안에서 서로 구분되어 읽히도록 재질 대비에 신경쓰면서 작업을 진행했습니다.",
        info:   [{ k: "Tools", v: "3ds Max / ZBrush / Substance Painter / Marmoset" }],
        labels: {
          "Axegun_Shadow_Camera 1_FullQuality.png": "Side View 01",
          "Axegun_Shadow_Camera 2_FullQuality.png": "Detail Render",
          "Axegun_Shadow_Camera 3_FullQuality.png": "Side View 02",
          "Axegun_Shadow_Camera 4_FullQuality.png": "Grip Detail",
          "Axegun_Shadow_Camera 5_FullQuality.png": "Blade Detail",
          "Axegun_Shadow_Camera 6_FullQuality.png": "Mechanism Detail"
        },
        files: [
          "Axegun_Shadow_Camera 1_FullQuality.png",
          "Axegun_Shadow_Camera 2_FullQuality.png",
          "Axegun_Shadow_Camera 3_FullQuality.png",
          "Axegun_Shadow_Camera 4_FullQuality.png",
          "Axegun_Shadow_Camera 5_FullQuality.png",
          "Axegun_Shadow_Camera 6_FullQuality.png"
        ]
      },
      {
        folder: "202604_Sofa",
        title:  "Sofa",
        date:   "2026-04",
        cover:  "Sofa1.png",
        desc:   "클래식한 체스터필드 스타일을 콘셉트로 제작된 가죽 소파.\n가죽의 주름과 사용감을 표현하는 데 중점을 두었으며, 면마다 러프니스의 차이점을 주어 실제 가죽처럼 보이도록 노력하였습니다.",
        info:   [{ k: "Tools", v: "3ds Max / ZBrush / Substance Painter / Marmoset" }],
        labels: { "Sofa_PBR_Render.png": "Texture Breakdown" },
        files: [
          "Sofa1.png",
          "Sofa2.png",
          "Sofa3.png",
          "Sofa_PBR_Render.png"
        ]
      },
      {
        folder: "202602_Knife",
        title:  "Knife",
        date:   "2026-02",
        cover:  "Knife5.jpg",
        desc:   "황폐한 세계관을 콘셉트로 제작된 Post Apocalypse Knife.\n여러 파츠 오브젝트를 각각 제작한 후 ZBrush에서 결합하여 하나의 메쉬로 완성하는 작업 파이프라인을 경험했습니다.",
        info:   [{ k: "Tools", v: "3ds Max / ZBrush / Substance Painter / Marmoset" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "Knife1.jpg",
          "Knife2.jpg",
          "Knife3.jpg",
          "Knife4.jpg",
          "Knife5.jpg",
          "Knife_PBR1.jpg",
          "Knife_PBR2.jpg"
        ]
      },
      {
        folder: "202512_Waterwheel",
        title:  "Waterwheel",
        date:   "2025-12",
        cover:  "Waterwheel3.png",
        desc:   "중세 시대의 물레방아로, 거친 석재 원판과 목재 프레임, 철제 보강 파츠가 결합된 구조를 통해 묵직한 질감을 표현한 오브젝트.",
        info:   [{ k: "Tools", v: "3ds Max / ZBrush / Substance Painter / Marmoset" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "Waterwheel1.png",
          "Waterwheel2.png",
          "Waterwheel3.png",
          "Waterwheel4.png",
          "Waterwheel5.png",
          "Waterwheel6.png",
          "Waterwheel_PBR.jpg"
        ]
      },
      {
        folder: "202510_Carriage",
        title:  "Carriage",
        date:   "2025-10",
        cover:  "Carriage_West3.png",
        desc:   "중세 시대를 콘셉트로 제작된 마차 오브젝트로, 목재와 철제 프레임, 마모된 질감을 구현\n\nZBrush를 활용해 주요 디테일을 직접 스컬핑한 후 이를 실제 언리얼 맵에 적용하는 과정을 경험했습니다.",
        info:   [{ k: "Tools", v: "3ds Max / ZBrush / Substance Painter / Marmoset / Unreal Engine 5" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          /* 영상은 이렇게 적습니다. poster 는 썸네일로 쓸 이미지입니다. */
          { video: "movies/carriage/Carriage_Movie.mp4",
            poster: "Carriage_West3.png",
            label:  "Turntable" },
          "Carriage1.png",
          "Carriage2.png",
          "Carriage3.png",
          "Carriage4.png",
          "Carriage5.png",
          "Carriage_West1.png",
          "Carriage_West2.png",
          "Carriage_West3.png",
          "Carriage_West4.png",
          "Carriage_West5.png",
          "Carriage_West6.png",
          "Carriage_West7.png"
        ]
      },
      {
        folder: "202506_CoffeeMachine",
        title:  "Coffee Machine",
        date:   "2025-06",
        cover:  "CoffeeMachine1.png",
        desc:   "레트로 감성의 커피머신과 토스터를 중심으로 구성된 주방 씬\n두 개의 메인 오브젝트를 중심으로 씬을 구성하는 방식을 익혔으며, 갓레이(God Ray)를 활용해 자연광의 분위기를 연출하였습니다.",
        info:   [{ k: "Tools", v: "3ds Max / Substance Painter / Marmoset / Unreal Engine 5" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "CoffeeMachine1.png",
          "CoffeeMachine2.png",
          "CoffeeMachine3.png",
          "CoffeeMachine_Light1.png",
          "CoffeeMachine_Light2.png",
          "CoffeeMachine_Light3.png",
          "CoffeeMachine_Light4.png"
        ]
      },
      {
        folder: "202504_Fireplace",
        title:  "Fireplace",
        date:   "2025-04",
        cover:  "Fireplace1.jpg",
        desc:   "고전적인 유럽풍 인테리어를 콘셉트로 한 벽난로 씬\n다양한 오브젝트를 개별 제작하여 하나의 공간으로 구성하는 환경 제작 과정을 경험, 언리얼 엔진에서 조명과 포그를 활용해 공간의 분위기를 표현하는 매핑 작업을 진행하였습니다.",
        info:   [{ k: "Tools", v: "3ds Max / Substance Painter / Marmoset / Unreal Engine 5" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "Fireplace1.jpg",
          "Fireplace2.jpg",
          "Fireplace3.jpg",
          "Fireplace4.jpg",
          "Fireplace5.jpg",
          "Fireplace_Midnight1.jpg",
          "Fireplace_Midnight2.jpg"
        ]
      },
      {
        folder: "202502_Sci-fi",
        title:  "Sci-fi Environment",
        date:   "2025-02",
        cover:  "Scifi_1.png",
        desc:   "SF 우주 기지 콘셉트의 복도 맵, 반복 구조의 모듈형 패널과 중앙 게이트로 구성\n\n게이트, 벽, 천장, 바닥의 4가지 파트로 나누어 모듈형 방식으로 제작하는 과정을 익혔으며, Emissive와 Decal 등 요소를 활용해 디테일과 완성도를 높이는 작업을 진행하였습니다.",
        info:   [{ k: "Tools", v: "3ds Max / Substance Painter / Marmoset / Unreal Engine 5" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "Scifi_1.png",
          "Scifi_2.png",
          "Scifi_3.png",
          "Scifi_4.png",
          "Scifi_5.png",
          "Scifi_6.png",
          "Scifi_7.png",
          "Scifi_8.png",
          "Scifi_9.png"
        ]
      },
      {
        folder: "2025_PersonalObjects",
        title:  "Personal Objects",
        date:   "2024",
        cover:  "JewelBox.jpg",
        desc:   "",          // 상세보기 설명 — 줄바꿈은 \n 을 넣으세요
        info:   [{ k: "Tools", v: "3ds Max / Substance Painter / Marmoset" }],
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "candlestick2.jpg",
          "candlestick_1.jpg",
          "desk.png",
          "JewelBox.jpg",
          "Unity_Berrel.png"
        ]
      }
    ]
  },

  {
    id: "sculpt",
    label: "Sculpt",       // Works 안에서 카드 밑에 표시되는 이름
    dir: "images/ZBRUSH",
    groups: [
      {
        folder: "",
        title:  "Rock",
        date:   "",
        cover:  "Rock6_Render.jpg",
        desc:   "",
        info:   [],
        labels: {
          "Rock6_Render.jpg":   "Rock 1",
          "Rock6_1.png":        "Rock 2",
          "Rock6_2.png":        "Rock 3",
          "ZBrush5_Main2.jpg":  "Rock 4",
          "ZBrush5_Main1.jpg":  "Rock 5",
          "ZBrush5.png":        "Rock 6",
          "ZBrush5_ZBrush.jpg": "Rock 7",
          "Zbrush4_1.png":      "Rock 8",
          "ZBrush4_2.png":      "Rock 9"
        },
        files: [
          "Rock6_Render.jpg",
          "Rock6_1.png",
          "Rock6_2.png",
          "ZBrush5_Main2.jpg",
          "ZBrush5_Main1.jpg",
          "ZBrush5.png",
          "ZBrush5_ZBrush.jpg",
          "Zbrush4_1.png",
          "ZBrush4_2.png"
        ]
      },
      {
        folder: "",
        title:  "Pillar",
        date:   "",
        cover:  "Zbrush3_2.png",
        desc:   "",
        info:   [],
        labels: {
          "Zbrush3_2.png": "Pillar 1",
          "Zbrush3_4.png": "Pillar 2"
        },
        files: [
          "Zbrush3_2.png",
          "Zbrush3_4.png"
        ]
      },
      {
        folder: "",
        title:  "Tile",
        date:   "",
        cover:  "ZBrush2_Gathered.png",
        desc:   "",
        info:   [],
        labels: {
          "ZBrush2_Gathered.png": "Tile 1",
          "ZBrush2.png":          "Tile 2",
          "ZBrush1.png":          "Tile 3"
        },
        files: [
          "ZBrush2_Gathered.png",
          "ZBrush2.png",
          "ZBrush1.png"
        ]
      }
    ]
  },

  {
    id: "designer",
    label: "Designer",
    dir: "images/Designer",
    bundle:   true,        // 카드 하나를 누르면 카테고리 전체가 한 묶음으로 열립니다.
    separate: true,        // Works 안에 섞지 않고, 아래에 별도 섹션으로 뺍니다.
    tiles:    true,        // 제목 없이 이미지 타일로 나열합니다.
    groups: [
      {
        folder: "",
        title:  "Designer Works",
        date:   "",
        cover:  "SubDe1.png",
        desc:   "나무, 돌, 철과 같은 기본적인 매터리얼의 특성에 대해 학습하였으며,\n각 재질의 거칠기, 마모와 오염 표현 차이를 사실적으로 구현하기 위해 노력하였습니다.",
        info:   [],          // [{ k:"Period", v:"2026.07" }, { k:"Tools", v:"3ds Max / ZBrush" }]
        labels: {},          // 썸네일 이름 — { "Knife1.jpg":"Detail Render" } 처럼
        files: [
          "SubDe1.png",
          "SubDe2.png",
          "SubDe3.png",
          "SubDe4.png",
          "SubDe5.png",
          "SubDe7.png"
        ],

        /* 색만 다른 버전.  "대표 파일": [ 버전 목록 ]
           대표 파일만 files 에 넣어 두면, 크게 보기에서 색 전환 버튼이 생깁니다.
           label 이 버튼에 적히는 글자입니다. */
        variants: {
          "SubDe7.png": [
            { label: "Grey", file: "SubDe7.png" },
            { label: "Red",  file: "SubDe7_Red.png" }
          ]
        }
      }
    ]
  }

];

/* 아직 비어 있는 폴더 — 이미지를 넣으면 personal groups 에 추가하세요.
   202608_Gate */
