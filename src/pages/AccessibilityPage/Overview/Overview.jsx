import React from 'react'
import styles from './Overview.module.scss'
import img1 from '../../../assets/images/accessibility/overview01.png'
import img2 from '../../../assets/images/accessibility/overview02.png'
import img3 from '../../../assets/images/accessibility/overview03.png'
import img4 from '../../../assets/images/accessibility/overview04.png'
import img5 from '../../../assets/images/accessibility/overview05.png'
import img6 from '../../../assets/images/accessibility/overview06.png'
import img7 from '../../../assets/images/accessibility/overview07.png'
import img8 from '../../../assets/images/accessibility/overview08.png'
import img9 from '../../../assets/images/accessibility/overview09.png'
import img10 from '../../../assets/images/accessibility/overview10.png'
import img11 from '../../../assets/images/accessibility/overview11.png'
import img12 from '../../../assets/images/accessibility/overview12.png'
import img13 from '../../../assets/images/accessibility/overview13.png'
import img14 from '../../../assets/images/accessibility/overview14.png'
import img15 from '../../../assets/images/accessibility/overview15.png'
import img16 from '../../../assets/images/accessibility/overview16.png'
import img17 from '../../../assets/images/accessibility/overview17.png'
import img18 from '../../../assets/images/accessibility/overview18.png'
import img19 from '../../../assets/images/accessibility/overview19.png'
import img20 from '../../../assets/images/accessibility/overview20.png'
import img21 from '../../../assets/images/accessibility/overview21.png'
import img22 from '../../../assets/images/accessibility/overview22.png'
import img23 from '../../../assets/images/accessibility/overview23.png'
import img24 from '../../../assets/images/accessibility/overview24.png'
import img25 from '../../../assets/images/accessibility/overview25.png'
import img26 from '../../../assets/images/accessibility/overview26.png'
import img27 from '../../../assets/images/accessibility/overview27.png'
import img28 from '../../../assets/images/accessibility/overview28.png'
import img29 from '../../../assets/images/accessibility/overview29.png'
import img30 from '../../../assets/images/accessibility/overview30.png'

const Overview = () => {
  const exampleCode1 = `
    <img src="img.png" alt="LG 워시타워. 파란색 건조기와 흰색 세탁기가 세로로 쌓인 콤보형 제품입니다. 높이는 1890mm, 폭은 700mm입니다. 옆에는 선반과 세탁 바구니가 있습니다. 이 이미지는 소비자의 이해를 돕기 위한 연출된 이미지입니다." />
  `;
  const exampleCode2 = `
    <video controls="" preload="metadata">
      <source src="video.mp4" type="video/mp4">
      <track label="English subtitles" kind="subtitles" srclang="en" src="upc-video-subtitles-en.vtt" default="">
    </video>
  `;
  const exampleCode3 = `
    WEBVTT FILE

    1
    00:00:03.500 --> 00:00:05.000 D:vertical A:start
    Everyone wants the most from life

    2
    00:00:06.000 --> 00:00:09.000 A:start
    Like internet experiences that are rich <b>and</b> entertaining

    3
    00:00:11.000 --> 00:00:14.000 A:end
    Phone conversations where people truly <c.highlight>connect</c>

    4
    00:00:14.500 --> 00:00:18.000
    Your favourite TV programmes ready to watch at the touch of a button
  `;
  const exampleCode4 = `
    ❌
    <a href="">메뉴1</a>
    <a href="">메뉴2</a>
    <div>메뉴1 내용</div>
    <div>메뉴2 내용</div>

    ⭕
    <a href="">메뉴1</a>
    <div>메뉴1 내용</div>
    <a href="">메뉴2</a>
    <div>메뉴2 내용</div>
  `;
  const exampleCode5 = `
    /* X */
    a:hover {
        color: #000;
    }
    /* O */
    a:hover,
    a:focus {
        color: #000;
    }

    // X
    $(document).on("mouseover", ".gnb a", function() { ... });
    // O
    $(document).on("mouseover focus", ".gnb a", function() { ... });
  `;
  const exampleCode6 = `
    /* X */이렇게 작업하면 안됩니다.
    10초 후 다음 페이지로 넘어갑니다. -> [다음 페이지로 즉시 이동]

    /* O */이렇게 작업하여야 합니다.
    20초 후 다음 페이지로 넘어갑니다. -> [취소] or [다음 페이지로 즉시 이동]
    20초 후 다음 페이지로 넘어갑니다. -> [20초 연장] or [다음 페이지로 즉시 이동]

    /* X */이렇게 작업하면 안됩니다.
    콘텐츠가 자동으로 슬라이드 되고 있는 상황에서 정지하거나 이전, 다음 콘텐츠를 탐색할 수 없다.

    /* O */이렇게 작업하여야 합니다.
    콘텐츠가 자동으로 슬라이드 되고 있지만 정지, 이전, 다음 기능을 제공하고 있다.
  `;
  const exampleCode7 = `
    /* X */
    <body>
        <h1>spring</h1>
        <nav>...</nav>
        <main>...</main>

    <!-- O -->
    <body>
        <a href="#main">본문으로 건너뛰기</a>
        <h1>spring</h1>
        <nav>...</nav>
        <main id="main">...</main>
  `;
  const exampleCode8 = `
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
      <meta name="keywords" content="팝업창" />
      <meta name="description" content="7월 휴무공지 안내문 팝업" />
      <title>※OO병원 7월 휴무 ★안내문★</title> ❌
      <title>OO병원 7월 휴무 안내문</title> ⭕
  `;
  const exampleCode9 = `
    <a href=”google.co.kr” ><img src=”google-logo.png” alt="구글 아이콘"></a> ❌
    <a href=”google.co.kr” ><img src=”google-logo.png” alt="">구글로 이동</a> ⭕
  `;
  const exampleCode10 = `
    div.addEventListener('mousedown', (event) => {
      event;
    }); ❌
    div.addEventListener('click', (event) => {
      event;
    }); ⭕
  `;
  const exampleCode11 = `
    <input type="text" name="name" autocomplete="on">
  `;
  const exampleCode12 = `
    ❌ 텍스트와 함께 추출하여 대체텍스트로 대체하는 방식
    <img src="img.png" alt="워시타워&middot;워시콤보 어떤 것을 골라야할까요?"> 

    ⭕ 이미지만 따로 분리추출하여 텍스트는 html 태그로 따로 작성한다. (css로 컨트롤 가능하도록)
    <div>
      <img src="img.png" alt="오른쪽에 파란색 건조기, 하얀색 세탁기가 직렬로 설치된 워시타워가 있고, 그 왼쪽엔 수건 보관대, 그 오른쪽엔 빨래바구니와 하얀의자가 있습니다."> 
      <p>워시타워&middot;워시콤보 어떤 것을 골라야할까요?</p>
    </div>
  `;
  const exampleCode13 = `
    $('.trigger').mouseenter(function(){
      $('.drawer').show();
    }); ❌

    $('.trigger').on({
      mouseenter: function(){
        $('.drawer').show();
      }
      ,mouseleave: function(){
        $('.drawer').hide();
      }
    }); ⭕
  `;
  const exampleCode14 = `
   .animation {
      animation: vibrate 0.3s linear infinite both;
    }

    @media (prefers-reduced-motion: reduce) {
      .animation {
        animation: none;
      }
    }
  `;
  return (
    <>
      <div className={`${styles.guide_container} spring_container`}>
        <h2 className="title">웹접근성 개요</h2>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">01 alt txt (대체 텍스트) 제공</h3>
          <div className="contents_wrap">
            <ul>
              <li>이미지 버튼의 경우 핵심 기능에 대한 텍스트 제공</li>
              <li>배경 이미지에 의미가 있으면 텍스트 제공</li>
              <li>복잡한 콘텐츠는 의미를 충분히 전달할 수 있도록 텍스트 제공</li>
              <li>생방송 콘텐츠나 특정 감각만 제공하는 콘텐츠는 간략한 텍스트 제공</li>
              <li>단순 장식용 이미지는 혼란을 줄 수 있으므로 공백 문자로 제공</li>
              <li>동일한 정보가 반복되지 않도록 함</li>
            </ul>
            <br/>
            <div className={styles.col}>
              <div className="img_box">
                <img src={img1} alt="" />
              </div>
              <div className="spring_code_inner">
                <pre>
                  <code>{exampleCode1}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">02 멀티미디어 콘텐츠에는 자막 제공</h3>
          <div className="contents_wrap">
            <h4 className="sub-title">대사 없는 영상은 화면 해설 제공</h4>
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode2}</code>
              </pre>
            </div>
            <br />
            <ul>
              <li>src : 자막의 경로를 지정해주는 속성입니다.</li>
              <li>srclang : 사용할 언어를 지정합니다. kind 속성이 subtitle이라면 반드시 지정해야 하는데 en이나 ko처럼 언어를 나타내는 약자로 표기합니다.</li>
              <li>label : 자막이 여러개일 경우, 자막을 식별할 수 있도록 제목을 달아줍니다.</li>
              <li>default : 자막이 여러개일 경우, 기본으로 사용할 자막을 지정해 줍니다.</li>
            </ul>
          </div>
          <div className="contents_wrap">
            <h4 className="sub-title">track태그 사용 예제 (.vtt 자막파일 생성)</h4>
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode3}</code>
              </pre>
            </div>
            <br />
            <a href="https://coding-factory.tistory.com/887#google_vignette" target="_blank">출처 - 코딩팩토리</a>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">03 표는 이해하기 쉽게 제공</h3>
          <div className="contents_wrap">
            <ul>
              <li>제목 셀과 데이터 셀을 구분</li>
            </ul>
            <br />
            <div className="img_box">
              <img src={img2} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">04 콘텐츠는 선형 구조, 논리적인 순서로 제공</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode4}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">05 지시사항은 명확하게</h3>
          <div className="contents_wrap">
            <ul>
              <li>요소의 실제 명칭이나 대체 텍스트 사용</li>
              <li>오답 확인 시 비프음 외에도 시각적으로 확인 가능해야 함</li>
            </ul>
            <div className="img_box">
              <img src={img3} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">06 색상만으로 구분하지 말 것</h3>
          <div className="contents_wrap">
            <ul>
              <li>차트 그래프는 동일한 명도로 구분하지 말고, 경조 모드에서도 보여야 함</li>
            </ul>
            <div className="img_box">
              <img src={img4} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">07 자동 소리 재생, 깜빡임 3초 이상 금지</h3>
          <div className="contents_wrap">
            <ul>
              <li>3초 이상 재생되면 제어 수단 제공</li>
              <li>깜빡이는 콘텐츠는 초당 3~50회 미만, 화면 면적의 10% 초과 금지</li>
            </ul>
            <br />
            <div className="img_box">
              <img src={img5} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">08 명도 대비 4.5대 1 이상 / 폰트 18pt 이상 또는 14pt 이상 굵은 폰트는 3:1까지 가능</h3>
          <div className="contents_wrap">
            <div className={styles.col}>
              <div className="img_box">
                <p>❌</p>
                <img src={img6} alt="" />
              </div>
              <div className="img_box">
                <p>⭕</p>
                <img src={img7} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">09 이웃한 콘텐츠는 명확하게 구분</h3>
          <div className="contents_wrap">
            <div className={styles.col}>
              <div className="img_box">
                <img src={img8} alt="" />
                <p>❌ 컨텐츠간에 라인을  삽입하거나, <br />배경색상 등을 달리해 구분해주어야 합니다.</p>
              </div>
              <div className="img_box">
                <img src={img9} alt="" />
                <p>⭕</p>
              </div>
            </div>
            <p>✔ 출처 - 네이버(NAVER) </p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">10 모든 기능이 키보드만으로 사용 가능</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode5}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">11 시간 제한 콘텐츠는 응답 시간 조절 가능해야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>시간 제한이 있을 경우 시간 연장, 로그인 화면으로 돌아가기 등 제어 가능해야 함</li>
              <li>시간 제한을 미리 알려주고 종료 시도 알려줘야 함</li>
              <li>자동 슬라이딩 캐러셀에서는 인디케이터로 뒤로 가거나 이전 이미지 확인 가능해야 함</li>
              <li>이동, 자동 변환 콘텐츠 사용 배제</li>
            </ul>
            <br />
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode6}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">12 조작이 용이해야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>모든 컨트롤 영역은 대각선 6.0mm 이상</li>
              <li>링크나 입력 인풋과 테두리는 1px 이상 간격 필요</li>
            </ul>
            <div className="img_box">
              <img src={img10} alt="" />
            </div>
            <p className="text">→ 터치 범위가 확실히 확보되어야 함</p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">13 콘텐츠 반복 영역을 건너뛸 수 있어야 하고 웹페이지 가장 앞쪽에 배치</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode7}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">14 팝업창에도 제목 필요, 특수 기호 사용 금지</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode8}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">15 링크 텍스트는 이동 경로를 명확하게 작성</h3>
          <div className="contents_wrap">
            <ul>
              <li>이미지 + 링크 텍스트는 이미지를 공백 문자로 제공</li>
              <li>제품 설명 페이지로 이동하는 링크는 링크 텍스트를 다르게 구성</li>
              <li>더보기는 어떤 게시글의 더보기인지 명확하게 알 수 있어야 함</li>
              <li>아이콘 이미지를 링크 텍스트로 대체할 경우 용도와 목적을 명료하게 제공</li>
              <li>전자출판 문서 형식 웹페이지의 경우 참조 위치 정보 구분자 제공 및 페이지로 이동 가능해야 함</li>
            </ul>
            <br />
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode9}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">16 다중 포인터나 경로 기반 동작 기능은 단일 포인터 입력으로도 조작 가능해야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>예: 좌우로 드래그해야만 전환되는 슬라이드는 사용해선 안되고, 페이지네이션이나 네비게이션 등으로 단일 포인터로도 충분히 컨트롤 가능하게끔 기능보완을 해주어야 함</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">17 다운 이벤트 (마우스 눌림) 완료 금지, 업 이벤트 (마우스 떼기) 시 완료되어야 하며 실행 전 중지 또는 실행 후 취소 가능해야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>예: 클릭 실수 시 다른 곳에서 업 이벤트로 실행 취소</li>
            </ul>
            <br />
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode10}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">18 손동작을 이용한 기능들은 인터페이스에서 조작 가능해야 하며, 해당 기능을 비활성화 가능해야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>예: 카메라 어플에서 특정 손짓을 하면 자동으로 촬영이 되는 기능이 있다. 이 기능은 비활성화가 가능해야 함.  </li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">19 의도치 않은 기능 실행 금지</h3>
          <div className="contents_wrap">
            <ul>
              <li>온라인 서식 자동 제출</li>
              <li>드롭다운 열기만으로 선택됨</li>
              <li>콘텐츠 초점만으로 메뉴 실행 (tab 눌러 콘텐츠 포커스 변경)</li>
              <li>초점 이동 또는 사라짐</li>
              <li>레이어 팝업 초점 이동으로 열리지 않음 - 선형 구조 위반</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">20 도움 정보는 동일한 순서로 제공, 모든 페이지에 챗봇 같은 내용은 동일한 위치에 제공</h3>
          <div className="contents_wrap">
            <ul>
              <li>입력 오류 시 누락 또는 틀린 내용 알려줘야 함</li>
            </ul>
            <div className="img_box">
              <img src={img11} alt="" />
            </div>
            <p className="text">도움 정보는 동일한 위치에 고정시켜야 함.</p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">21 인증 시 인지 기능 테스트(비밀번호 입력, 패턴 인식 등)에 의존하지 않고 공개 인증, 생체 인증, 물건 인증 등 한 가지 이상 제공</h3>
          <div className="contents_wrap">
            <ul>
              <li></li>
            </ul>
            <div className={styles.col}>
              <div className="img_box">
                <img src={img12} alt="" />
                <p>→ 패턴 잠금</p>
              </div>
              <div className="img_box">
                <img src={img13} alt="" />
                <p>→ 비밀번호 잠금</p>
              </div>
              <div className="img_box">
                <img src={img14} alt="" />
                <p>→ 지문인식 잠금도 추가해야함.</p>
              </div>
            </div>
            <p className="text">이미지 출처 - 삼성전자서비스</p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">22 이미 입력한 정보는 자동 채우기 또는 선택 입력 가능, 비밀번호 등 재입력 필수 항목 제외</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode11}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">23 필수 입력 부분 명확히 표시, 필수 항목과 선택 항목 분리 방법 제시</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img3} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">24 브라우저 확대 시 글자 잘림 금지, 200%~400% 확대 가능, 가로 또는 세로 스크롤 중 하나만 가능</h3>
          <div className="contents_wrap">
            <ul>
              <li>너비 1,280 픽셀 해상도 모니터에서 400%까지 확대할 수 있다. 모바일 단말에서는 테스트하지 않는다.</li>
              <li>화면을 400% 확대한 상태에서 내용과 기능에 손실이 없어야 하고, 2차원 스크롤이 발생하지 않아야 한다.</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">25 이미지위에 있는 텍스트는 이미지와 합치지 않고, 따로 작성한다.</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img15} alt="" />
            </div>
            <br />
            <p className="text">위의 이미지를 html에 삽입할 경우,</p>
            <br />
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode12}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">26 한 줄 80자 (한글 40자) 이하 작성 - 줄 간격 1.5 / 단락 줄 1.5배 간격 제공, 가로 스크롤 없이 글자 2배 확대 가능</h3>
          <div className="contents_wrap">
            <div className={styles.col}>
              <div className="img_box">
                <img src={img16} alt="" />
              </div>
              <div className="img_box">
                <img src={img17} alt="" />
              </div>
            </div>
            <p className="text">→ 텍스트의 줄간격과 단락 줄간격을 넉넉히 하고, 한 줄에 텍스트가 과하게 있지 않아야 함</p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">27 사용자 인터페이스나 그래픽 콘텐츠에 3:1 이상 명도 대비 제공 (사용 불가 표시 인터페이스 제외)</h3>
          <div className="contents_wrap">
            <ul>
              <li>콘텐츠와 배경 색의 명도 대비가 3:1까지 허용되는 경우는 다음과 같습니다.<br />
              &nbsp;- 텍스트가 18pt 또는 굵은(Bold) 14pt 이상일 경우 <br />
              &nbsp;- 확대 가능한 페이지의 일반 텍스트 또는 이미지 텍스트
              </li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">28 마우스 호버 콘텐츠는 닫기 가능해야 하고 호버 중 사라지면 안 됨</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode13}</code>
              </pre>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">29 모든 기능 키보드만으로 사용 가능 - 드래그드롭 포함</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img18} alt="" />
            </div>
            <p className="text">→ 드래그드롭으로 좌우 전환하는 컨텐츠도 tabindex 속성을 활용하여 포커싱만으로도 전환이 가능하게 되어야 함.</p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">30 인증 세션 만료 시 재인증 후 기존 작업 계속 가능해야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>글쓰기 중단 시 로그인 후 기존 작성글 유지</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">31 상호작용 애니메이션은 의미 전달이 아니면 비활성화 가능</h3>
          <div className="contents_wrap">
            <div className="spring_code_inner">
              <pre>
                <code>{exampleCode14}</code>
              </pre>
            </div>
            <br />
            <ul>
              <li>prefers-reduced-motion는 유저의 OS의 동작 줄이기 설정에 따라, 애니메이션을 컨트롤하는 미디어쿼리. 해당 값은 다음과 같다. <br />
              &nbsp; → -no-preference : 사용자가 별도의 설정을 하지 않은 경우 (동작 줄이기 설정을 하지 않은 상태) <br />
              &nbsp; → reduce : 사용자가 동작 줄이기 설정을 한 경우</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">32 콘텐츠 위치를 찾는 다양한 방법 제공 - 대메뉴, 검색, 사이트맵 등</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img19} alt="" />
              <p>→ 대메뉴 (출처 - LG전자)</p>
            </div>
            <br />
            <div className="img_box">
              <img src={img20} alt="" />
              <p>→ 전체메뉴 (출처 - LG전자)</p>
            </div>
            <br />
            <div className="img_box">
              <img src={img21} alt="" />
              <p>→ 사이트맵 (출처 - LG전자)</p>
            </div>
            
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">33 기사 제목은 기사 내용을 충분히 대표해야 함</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img22} alt="" />
              <p>→ 기사제목만으로도 기사 내용을 유추 가능해야 합니다. (출처 - 네이버)</p>
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">34 터치 기반은 44x44 픽셀 이상이어야 함</h3>
          <div className="contents_wrap">
            <ul>
              <li>버튼의 경우 웹접근성 지침(WCAG)에 따르면 타겟의 크기는 최소 44 x 44px 이상이어야 한다.<br />(사용성을 고려하여 터치 영역을 넓게 잡으면 클릭하기 수월해 진다.)</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">35 어려운 용어, 약어 사용 지양, 설명 제공</h3>
          <div className="contents_wrap">
            <ul>
              <li>어려운 용어, 약어를 사용할 시 이용자가 해석하지 못할 수 있으니, 보편적으로 쉽게 쓰이는 대체어를 사용하거나 설명을 따로 보충한다.</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">36 입력 양식 자동 제출 금지, 확인 버튼 등으로 제출 의도 명확히 해야 함</h3>
          <div className="contents_wrap">
            <div className={styles.col}>
              <div className="img_box">
                <p>❌</p>
                <img src={img23} alt="" />
              </div>
              <div className="img_box">
                <p>⭕</p>
                <img src={img24} alt="" />
              </div>
            </div>
            <p className="text">→ 제출버튼을 따로 만들어 이용자의 명확한 제스쳐를 통해야만 제출되도록 해야 함.</p>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">37 내비게이션 순서와 콘텐츠 구성 순서 동일하게</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img25} alt="" style={{filter: 'brightness(0.9)'}} />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">37 동일 기능 아이콘 버튼은 일관성 있게 제공</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img26} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">38 확인과 같은 요구에 의해서만 콘텐츠 문맥 변경, 드롭다운에서 확인 버튼 제공</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img27} alt="" />
            </div>
            <ul>
              <li>예: 영문페이지로 이동하려고 할 때, 언어 셀렉트박스에서 eng을 선택 후 바로 영문페이지로 이동하면 안된다. 이동 버튼을 따로 마련하여 eng을 선택 후 이동버튼을 눌러야지만 콘텐츠가 그에 알맞게 변경되어야 한다. 
              (하지만 대부분 웹사이트는 이렇게까지 고려하여 만들지 않아, 참고용으로만 알아두는게 좋다.)</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">39 잘못 입력한 내용과 위치 알려줘야 함 - 생년월일 칸에 숫자 미입력 시 숫자만 입력 가능하다고 표시</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img28} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">40 입력 시 조건 지시문 제공</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img29} alt="" />
            </div>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">41 중요한 데이터 변경 시 원래대로 되돌리는 기능, 미리 오류 체크 기능, 최종 확인 기능 중 하나 이상 제공</h3>
          <div className="contents_wrap">
            <ul>
              <li>온라인 주문 시 실수 의심 시 미리 알림, 결제 전 주문 내용 확인, 결제 후 주문 취소 기능 제공</li>
            </ul>
          </div>
        </section>
        <section className={styles.guide_inner}>
          <h3 className="guide-title">42 상황에 맞는 도움말 제공</h3>
          <div className="contents_wrap">
            <div className="img_box">
              <img src={img30} alt="" />
            </div>
            <ul>
              <li>→ 입력방식에 조건이 있을 경우 도움말을 제공해주어야 함.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Overview