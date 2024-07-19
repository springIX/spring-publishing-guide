import React from "react";
import styles from "./RuleStandard.module.scss";

const RuleStandard = () => {
  const codeString = `
    <!DOCTYPE html>
    <html lang="ko">
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta charset="utf-8">
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
            <meta name="keywords" content="">
            <meta name="description" content="">
            <meta name="robots" content="ALL">
            <meta property="og:type" content="website">
            <meta property="og:title" content="">
            <meta property="og:description" content="">
            <meta property="og:site_name" content="">
            <meta property="og:image" content="">
            <meta property="og:url" content="">
            <meta property="og:locale" content="en_US">
            <meta property="og:locale:alternate" content="ko_KR">

            <title>페이지명 | 사이트명</title>

            <link rel="apple-touch-icon" href="<?=$aPath?>/assets/images/favicons/192x192.png">
            <link rel="icon" type="image/png" href="<?=$aPath?>/assets/images/favicons/192x192.png" sizes="192x192">
            <link rel="icon" type="image/png" href="<?=$aPath?>/assets/images/favicons/180x180.png" sizes="180x180">
            <link rel="icon" type="image/png" href="<?=$aPath?>/assets/images/favicons/32x32.png" sizes="32x32">
            <link rel="icon" type="image/png" href="<?=$aPath?>/assets/images/favicons/16x16.png" sizes="16x16">
            <link rel="shortcut icon" href="<?=$aPath?>/favicon.ico">
            <link rel="stylesheet" type="text/css" href="">
        </head>
        <body>
        </body>
    </html>
  `;
  return (
    <>
      <div className={`${styles.standard_container} spring_container`}>
        <h2 className="title">표준규칙 가이드</h2>
        <section className={styles.standard_inner}>
          <h3 className="guide-title">head 태그 가이드</h3>
          <div className="spring_code_inner">
            <pre>
              <code>{codeString}</code>
            </pre>
          </div>
        </section>
        <section className={styles.semantic_inner}>
          <h3 className="guide-title">Semantic Markup</h3>
          <div className={styles.semantic_table_inner}>
            <table>
              <thead>
                <tr>
                  <th>Tag</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <div>&lt;article&gt;</div>
                  </th>
                  <td>
                    <div>
                      독립적인 글을 다루는 데 사용하는 태그입니다. 블로그 게시물, 뉴스 기사, 제품 리뷰 등 독립적으로 배포하거나 재사용할 수 있는 독립형 콘텐츠를 정의합니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;aside&gt;</div>
                  </th>
                  <td>
                    <div>
                      문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다.
                      주로 사이드바 혹은 콜아웃 박스로 표현합니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;details&gt;</div>
                  </th>
                  <td>
                    <div>
                      "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을생성합니다.<br />
                      추가로, <span>&lt;details&gt;</span> 태그와 함께 쓰이는 <span>&lt;summary&gt;</span> 태그는 <span>&lt;details&gt;</span> 에서 보이는 부분을 담당합니다. <span>&lt;summary&gt;</span> 태그는 <span>&lt;details&gt;</span> 태그의 첫 번째 하위 항목이어야 합니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;figure&gt;</div>
                  </th>
                  <td>
                    <div>
                      독립적인 콘텐츠를 표현합니다.<br />
                      <span>&lt;figure&gt;</span>
                      
                      태그는 일러스트레이션, 다이어그램, 사진, 코드 목록 등과 같은 자체 포함된 콘텐츠를 지정합니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;figcaption&gt;</div>
                  </th>
                  <td>
                    <div>
                      태그는 <span>&lt;figure&gt;</span> 요소에 대한 캡션을 정의하며, 문서에서 사진의 설명을 추가하기 위해 사용됩니다. ‘Caption’이라는 단어 자체가 이미지에 대한 간략한 설명을 의미하는 만큼, <span>&lt;figcaption&gt;</span>은 <span>&lt;figure&gt;</span>에 대한 간략한 설명입니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;footer&gt;</div>
                  </th>
                  <td>
                    <div>
                      문서 또는 섹션의 바닥글을 지정하며, 문서의 아래쪽에 위치합니다. <span>&lt;footer&gt;</span>의 요소에는 일반적으로 연락처 정보, 사이트 맵, 웹사이트를 하나로 묶고 SEO를 강화하는 데 도움이 되는 소셜 미디어 사이트에 대한 링크와 같은 추가 링크가 포함됩니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;header&gt;</div>
                  </th>
                  <td>
                    <div>
                      문서나 섹션의 머릿글을 지정하며, 로고, 탐색, 제목 및 기타 소개 정보가 포함된 페이지 상단 부분을 정의합니다. 여기에는 메타 태그 정보, 키워드, 심지어 가져온 CSS 파일이나 스타일 시트도 포함되는 경우가 많습니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;main&gt;</div>
                  </th>
                  <td>
                    <div>
                      메인 내용을 담는 태그로, 웹사이트의 텍스트 본문이나 콘텐츠를 나타냅니다. <span>&lt;main&gt;</span> 태그는 문서에서 유일해야 하고, <span>&lt;article&gt;</span>, <span>&lt;aside&gt;</span>, <span>&lt;footer&gt;</span>, <span>&lt;header&gt;</span>, <span>&lt;nav&gt;</span> 등 모든 페이지의 태그 앞에 옵니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;mark&gt;</div>
                  </th>
                  <td>
                    <div>
                      현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한
                      부분을 나타냅니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;nav&gt;</div>
                  </th>
                  <td>
                    <div>
                      태그는 웹사이트의 메뉴, 탭, 탐색경로 등 탐색 링크가 포함된 페이지 부분을 정의합니다.<br />
                      성공적인 웹사이트를 개발하려면 액세스 가능하고 업데이트된 탐색 섹션이 필요합니다. 어떤 종류의 웹 사이트를 구축하든 사용자가 웹사이트를 적절하게 탐색할 수 있도록 탐색 링크를 추가해야 합니다. <span>&lt;nav&gt;</span> 태그를 사용하면 탐색 링크용으로 지정된 사이트의 특정 섹션을 구성하는 데 도움이 됩니다. 
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;section&gt;</div>
                  </th>
                  <td>
                    <div>
                      문서의 부분을 의미하는 태그로, 기본 콘텐츠 내의 특정 주제 또는 부제목과 관련된 주제별 콘텐츠 그룹을 정의합니다. <span>&lt;section&gt;</span> 안에 <span>&lt;section&gt;</span>을 넣을 수도 있고, <span>&lt;article&gt;</span>을 이용해 내용을 넣을 수도 있습니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;summary&gt;</div>
                  </th>
                  <td>
                    <div>
                      <span>&lt;details&gt;</span> 요소의
                      공개 상자에 대한 요약, 캡션 또는 범례를 지정합니다.<br />
                      <span>&lt;summary&gt;</span> 요소를
                      클릭하면 상위<br />
                      <span>&lt;details&gt;</span> 요소의
                      상태가 열리고 닫힙니다.
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <div>&lt;time&gt;</div>
                  </th>
                  <td>
                    <div>
                      시간의 특정 지점 또는 구간을 나타냅니다. datetime 특성의
                      값을 지정해 보다 적절한 검색 결과나, 알림 같은 특정 기능을
                      구현할 때 사용할 수 있습니다.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contents_inner">
            <div className="contents">
              <h4 className="sub-title">시맨틱 태그의 이점</h4>
              <p className="text">
                시맨틱 태그를 사용함에 따라 오는 이점에는 크게 세 가지가 존재합니다. 이 세 가지는 모두 인터넷 전반에 걸쳐 웹사이트의 일관성을 향상시키는 것과 관련이 있습니다. Non-Semantic HTML 태그는 더 모호하며 해석하는 데 더 많은 리소스가 필요합니다. 개발자가 의미론적으로 작성할 때 브라우저가 식별할 수 있는 요소에 대해 표준화된 이름을 사용하므로 인터넷에서 HTML의 상호 운용성이 향상됩니다.
              </p>
            </div>
            <div className="contents">
              <h4 className="sub-title">1. 접근성 향상</h4>
              <p className="text">
                시맨틱 태그를 사용하면 페이지의 접근성이 향상됩니다. HTML 시맨틱 태그 요소는 사람들이 웹페이지를 탐색하고 페이지와 상호 작용하는 데 도움이 되는 화면 판독기, 키보드 또는 음성 명령과 같은 보조 기술에 대한 유용한 정보와 단서를 제공할 수 있습니다. 예를 들어, <span>&lt;nav&gt;</span>의 경우, 콘텐츠에 탐색 링크가 포함되어 있음을 나타낼 수 있고, <span>&lt;article&gt;</span>의 경우에는 독립형 콘텐츠가 포함되어 있음을 나타낼 수 있습니다.
              </p>
              <p className="text">
                접근성 측면에서 시맨틱 태그가 중요한 또 다른 이유는 스크린 리더 사용자에게 큰 이점을 주기 때문입니다. 우리는 신체적, 인지적 장애가 있는 사람들을 포함하여 모든 사람에게 원활하고 원활한 경험을 보장하고자 합니다. 또한, 시맨틱 태그 요소는 웹페이지의 다양한 섹션을 명확하게 정의하고 웹 전체의 일관성을 유지함으로써 사용자 경험과 만족도 또한 향상시킬 수 있습니다.
              </p>
            </div>
            <div className="contents">
              <h4 className="sub-title">2. SEO (검색엔진최적화) 향상</h4>
              <p className="text">
                SEO (검색엔진최적화)는 Google과 같은 검색엔진 상에서 웹사이트 순위에 영향을 미칩니다. 시맨틱 태그를 사용하면 검색엔진과 사용자에게 웹페이지가 더 눈에 띄고 매력적으로 보이게 만들 수 있습니다.
              </p>
              <p className="text">
                시맨틱 태그는 관련 키워드와 문구에 대해 웹페이지를 최적화하는 데 도움이 되며, 이를 통해 검색결과 상에서 웹 사이트 노출 순위를 높이고 더 많은 트래픽을 유도할 수 있습니다. 더불어 웹페이지의 성능과 속도를 향상시켜 이탈률을 줄이고 전환율을 높이는 데에도 도움이 될 수 있습니다.
              </p>
              <p className="text">
                또한, 검색엔진에 풍부하고 구조화된 데이터를 제공할 수 있으며, 이는 더욱 매력적이고 유익한 스니펫과 결과를 만들어 낼 수 있습니다.
              </p>
            </div>
            <div className="contents">
              <h4 className="sub-title">3. 가독성 향상</h4>
              <p className="text">
                시맨틱 태그를 사용하면 웹페이지의 가독성 또한 향상됩니다. 즉, 사람들이 콘텐츠를 더 쉽고 빠르게 이해하고 소비할 수 있게 됩니다. 시맨틱 태그는 콘텐츠의 명확하고 일관된 흐름과 구조를 만드는데 도움이 됩니다.
              </p>
              <p className="text">
                또한, 시맨틱 태그는 제목과 키워드, 요약 등 콘텐츠의 가장 중요하고 관련성 높은 부분을 강조할 때 도움이 됩니다.
              </p>
              <p className="text">
                가독성 측면에서 시맨틱 태그가 중요한 이유는 불필요하거나 중복되는 코드를 피하는 데 도움이 된다는 것입니다. 이를 통해 웹페이지를 더 빠르고 효율적으로 만들 수 있습니다.
              </p>
            </div>
          </div>
        </section>
        {/* <div className={styles.entity_wrap}>
          <h3 className="guide-title">특수기호 Entity name</h3>
          <div className="desc">
              <pc className="text">
                특수기호는 <a href="https://symbl.cc/kr/html-entities/" target="_blank">Entity name</a>을 사용하여 entity 코드로 변환한다.
              </pc>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default RuleStandard;
