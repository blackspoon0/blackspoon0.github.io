/* ==========================================================================
   data.js — 이 파일만 고치면 홈페이지 내용이 바뀝니다.
   ==========================================================================
   [작업 추가하는 법]
   1. images/Personal 안에 "YYYYMM_제목" 폴더를 만들고 이미지를 넣습니다.
   2. 아래 CATEGORIES 의 personal groups 맨 위에 한 덩어리를 복사해 붙이고
      folder / title / date / files 를 실제 이름으로 고칩니다.
   3. files 에는 폴더 안의 파일 이름을 "정확히 그대로" 적습니다.
      (대소문자, 띄어쓰기, 괄호까지 전부 동일하게)
   ========================================================================== */

const SITE = {
  name:     "CHO EUNSEO",
  nameKo:   "조은서",
  role:     "3D Artist",
  tagline:  "게임에 들어가는 물건과 공간을 만듭니다.",
  email:    "blackspoon0@gmail.com",

  /* 첫 화면 배경으로 쓸 이미지 (가볍고 분위기 있는 걸 추천) */
  hero: "web/Personal/202504_Fireplace/Fireplace1.jpg",

  /* 탭 아이콘 */
  favicon: "favicon.png",

  about: [
    "하드서피스 프롭과 환경 애셋을 중심으로 작업하는 3D 아티스트입니다.",
    "모델링부터 텍스처, 라이팅, 최종 렌더까지 한 덩어리로 다루는 방식을 좋아합니다.",
    "이 페이지는 그동안 쌓인 개인 작업을 시간 순서로 모아 둔 아카이브입니다. 카드를 누르면 크게 볼 수 있습니다."
  ],

  facts: [
    { k: "Role",   v: "3D Artist / Prop &amp; Environment" },
    { k: "Focus",  v: "Hard-surface, Props, Environment, Lighting" },
    { k: "Tools",  v: "Maya, ZBrush, Substance 3D Painter, Marmoset, Unreal Engine, Unity" },
    { k: "Email",  v: "MAIL" }   // "MAIL" 이라고 두면 클릭 시 복사되는 이메일 버튼이 됩니다.
  ],

  /* 필요 없으면 줄을 통째로 지우세요. url 이 비어 있으면 화면에 안 나옵니다. */
  links: [
    { label: "ArtStation", url: "" },
    { label: "YouTube",    url: "" }
  ]
};

/* 웹용 축소본 사용 여부.
   thumbs/ = 카드·썸네일용 (긴 변 900px)
   web/    = 크게 보기용 (긴 변 1920px)
   원본(images/)은 그대로 보관용으로 남아 있고, 축소본이 없으면 자동으로 원본을 씁니다. */
const USE_THUMBS = true;
const USE_WEB    = true;
const THUMB_DIR  = "thumbs";
const WEB_DIR    = "web";

/* ==========================================================================
   작업 목록
   date 형식: "YYYY-MM" 또는 "YYYY"  (비워 두면 날짜 없이 표시됩니다)
   cover 는 카드에 보일 대표 이미지. 안 적으면 files 의 첫 장을 씁니다.
   ========================================================================== */

const CATEGORIES = [
  {
    id: "personal",
    label: "Personal Works",
    dir: "images/Personal",
    groups: [
      {
        folder: "202602_Knife",
        title: "Knife",
        date: "2026-02",
        cover: "Knife1.jpg",
        files: [
          "Knife1.jpg",
          "Knife2.jpg",
          "Knife3.jpg",
          "Knife4.jpg",
          "Knife5.jpg",
          "Knife_Camera 1.png",
          "Knife_Camera_RenderPass.jpg",
          "Knife_Camera_RenderPass2.jpg"
        ]
      },
      {
        folder: "202512_Waterwheel",
        title: "Waterwheel",
        date: "2025-12",
        cover: "Carriage.png",
        files: [
          "Carriage.png",
          "Carriage(1).png",
          "Carriage(2).png",
          "Carriage(3).png",
          "Carriage(4).png",
          "Carriage(5).png",
          "Waterwheel.jpg"
        ]
      },
      {
        folder: "202510_Carriage",
        title: "Carriage",
        date: "2025-10",
        cover: "Carriage.png",
        files: [
          "Carriage.png",
          "Carriage(1).png",
          "Carriage(2).png",
          "Carriage(3).png",
          "Carriage(4).png",
          "HighresScreenshot00046.png",
          "HighresScreenshot00047.png",
          "HighresScreenshot00048.png",
          "HighresScreenshot00049.png",
          "HighresScreenshot00050.png",
          "HighresScreenshot00051.png",
          "HighresScreenshot00052.png"
        ]
      },
      {
        folder: "202506_CoffeeMachine",
        title: "Coffee Machine",
        date: "2025-06",
        cover: "HighresScreenshot00177.png",
        files: [
          "HighresScreenshot00177.png",
          "HighresScreenshot00178.png",
          "HighresScreenshot00179.png",
          "HighresScreenshot00180.png",
          "HighresScreenshot00185.png",
          "HighresScreenshot00186.png",
          "HighresScreenshot00187.png",
          "HighresScreenshot00188.png"
        ]
      },
      {
        folder: "202504_Fireplace",
        title: "Fireplace",
        date: "2025-04",
        cover: "Fireplace1.jpg",
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
        title: "Sci-fi Environment",
        date: "2025-02",
        cover: "HighresScreenshot00070.png",
        files: [
          "HighresScreenshot00066.png",
          "HighresScreenshot00068.png",
          "HighresScreenshot00070.png",
          "HighresScreenshot00074.png",
          "HighresScreenshot00076.png",
          "HighresScreenshot00078.png",
          "HighresScreenshot00081.png",
          "HighresScreenshot00123.png",
          "HighresScreenshot00124.png"
        ]
      },
      {
        folder: "2025_PersonalObjects",
        title: "Personal Objects",
        date: "2025",
        cover: "candlestick2.jpg",
        files: [
          "candlestick2.jpg",
          "candlestick_wip.jpg",
          "desk.png",
          "Unity_Berrel.png",
          "wip_01.jpg"
        ]
      }

      /* 아직 비어 있는 폴더 — 이미지를 넣으면 아래 주석을 풀어서 쓰세요.
      ,{ folder:"202608_Gate",   title:"Gate",   date:"2026-08", files:[] }
      ,{ folder:"202606_Axegun", title:"Axegun", date:"2026-06", files:[] }
      ,{ folder:"202604_Sofa",   title:"Sofa",   date:"2026-04", files:[] }
      */
    ]
  },

  {
    id: "designer",
    label: "Designer",
    dir: "images/Designer",
    bundle: true,          // 카드 하나를 누르면 이 카테고리 전체가 한 묶음으로 열립니다.
    groups: [
      {
        folder: "",
        title: "Designer Works",
        date: "",
        cover: "6_001.png",
        files: [
          "6_001.png",
          "SubDe.png",
          "SubDe(1).png",
          "SubDe(2).png",
          "SubDe(3).png",
          "SubDe5.png",
          "SubDe7.png",
          "SubDe7_Red.png"
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
        title: "Rock Study",
        date: "",
        cover: "Rock5_Main Camera 1.jpg",
        files: [
          "Rock5_Main Camera 1.jpg",
          "Rock5_Main Camera 2.jpg",
          "Rock5.png"
        ]
      },
      {
        folder: "",
        title: "Tile Study",
        date: "",
        cover: "Tile2_Main Camera_005.png",
        files: [
          "Tile2_Main Camera_005.png",
          "Tile1_End.png"
        ]
      },
      {
        folder: "",
        title: "Sculpt Study",
        date: "",
        cover: "ZBrush5_Photo.jpg",
        files: [
          "ZBrush5_Photo.jpg",
          "Zbrush3_2.png",
          "Zbrush3_4.png",
          "지브2목표.png"
        ]
      }
    ]
  }
];
