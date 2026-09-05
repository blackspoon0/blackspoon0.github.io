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

  /* 첫 화면 배경 */
  hero: "web/Personal/202504_Fireplace/Fireplace1.jpg",

  /* 탭 아이콘 */
  favicon: "favicon.png",

  /* About 본문. 한 줄이 한 문단입니다.
     문장 안에 \n 을 넣으면 그 자리에서 줄이 바뀝니다. (좁은 화면에서는 자동으로 더 접힙니다) */
  about: [
    "기술적 제약과 제작 기준 속에서도 디테일과 완성도를 유지하는 것이\n배경 아티스트의 역량이라고 생각하며, 이를 위해 꾸준히 발전해 나가고 있습니다."
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
        cover:  "Axegun3.png",
        files: [
          "Axegun1.png",
          "Axegun2.png",
          "Axegun3.png"
        ]
      },
      {
        folder: "202604_Sofa",
        title:  "Sofa",
        date:   "2026-04",
        cover:  "Sofa1.png",
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
        cover:  "Knife1.jpg",
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
        cover:  "Waterwheel1.png",
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
        cover:  "Carriage1.png",
        files: [
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
    id: "designer",
    label: "Designer",
    dir: "images/Designer",
    bundle: true,          // 카드 하나를 누르면 카테고리 전체가 한 묶음으로 열립니다.
    groups: [
      {
        folder: "",
        title:  "Designer Works",
        date:   "",
        cover:  "SubDe1.png",
        files: [
          "SubDe1.png",
          "SubDe2.png",
          "SubDe3.png",
          "SubDe4.png",
          "SubDe5.png",
          "SubDe7.png",
          "SubDe7_Red.png",
          "SubDe8.png"
        ]
      }
    ]
  },

  {
    id: "zbrush",
    label: "ZBrush Study",
    dir: "images/ZBRUSH",
    groups: [
      {
        folder: "",
        title:  "Rocks",
        date:   "",
        cover:  "Rock6_Render.jpg",
        files: [
          "Rock6_Render.jpg",
          "Rock6_1.png",
          "Rock6_2.png",
          "Rock6_3.png",
          "ZBrush5_Main2.jpg",
          "ZBrush5_Main1.jpg",
          "ZBrush5.png",
          "ZBrush5_ZBrush.jpg"
        ]
      },
      {
        folder: "",
        title:  "Pillars",
        date:   "",
        cover:  "Zbrush3_2.png",
        files: [
          "Zbrush3_2.png",
          "Zbrush3_4.png"
        ]
      },
      {
        folder: "",
        title:  "Tile",
        date:   "",
        cover:  "ZBrush1.png",
        files: [
          "ZBrush1.png",
          "ZBrush2.png",
          "ZBrush2_Gathered.png"
        ]
      }
    ]
  }

];

/* 아직 비어 있는 폴더 — 이미지를 넣으면 personal groups 에 추가하세요.
   202608_Gate */
