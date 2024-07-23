import React, { useState } from 'react';
import styles from "./RuleCode.module.scss";

const RuleCode = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const htmlCode1 = `
    <!-- Bad -->
    <table>
        <tr>
            <th>Name</th>
            <th>Favorite Color</th>
        </tr>
    ...
    </table>

    <!-- Good -->
    <table>
      <tr>
        <th>Name</th>
        <th>Favorite Color</th>
      </tr>
    ...
    </table>
  `;
  const htmlCode2 = `
    <!-- Bad -->
    <a href='/' class='home'>Home</a>

    <!-- Good -->
    <a href="/" class="home">Home</a>
  `;
  const htmlCode3 = `
    <!-- Bad -->
    <A HREF="/">Home</A>

    <!-- Good -->
    <a href="/">Home</a>
  `;
  const htmlCode4 = `
    <!-- Bad -->
    <input type="text" disabled=true>

    <!-- Good -->
    <input type="text" disabled>

    <!-- Good -->
    <input type="checkbox" value="1" checked>

    <!-- Bad -->
    <input type="checkbox" value="1" checked=true>

    <!-- Good -->
    <select>
      <option value="1" selected>1</option>
    </select>

    <!-- Bad -->
    <select>
      <option value="1" selected=true>1</option>
    </select>
  `;
  const htmlCode5 = `
    <!-- Bad -->
    <span class="tui">
      <img src="...">
    </span>

    <!-- Good -->
    <img class="tui" src="...">
  `;
  const htmlCode6 = `
    <!-- Bad -->
    <p><strong>All recommendations</strong></p>

    <!-- Good -->
    <h3 className="guide-title">All recommendations</h3>

    <!-- Bad -->
    Some text
    <br />
    <br />
    Some more text

    <!-- Good -->
    <p>Some text</p>
    <p>Some more text</p>

    <!-- Bad -->
    <div onclick="bad();">go</div>

    <!-- Good -->
    <a href="good/">go</a>
  `;
  const htmlCode7 = `
    <!-- Bad -->
    <link rel="stylesheet" href="//uicdn.toast.com/tui.chart/latest/tui-chart.min.css" type="text/css">

    <!-- Good --> 
    <link rel="stylesheet" href="//uicdn.toast.com/tui.chart/latest/tui-chart.min.css">

    <!-- Bad -->
    <script src="//uicdn.toast.com/tui.chart/latest/tui-chart.min.js" type="text/javascript"></script>

    <!-- Good -->
    <script src="//uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
  `;
  const htmlCode8 = `
    <!-- Bad -->
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Page</title>
            <link rel="stylesheet" href="//uicdn.toast.com/tui.chart/latest/tui-chart.min.css" type="text/css">
            <script src="//uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
        </head>
        ...
    </html>

    <!-- Good -->
    <!DOCTYPE html>
    <html>
        <head>
            <title>HTML Page</title>
            <link rel="stylesheet" href="//uicdn.toast.com/tui.chart/latest/tui-chart.min.css" type="text/css">
        </head>
        <body>
            ...
            <!-- body 요소 안, 맨 마지막에 씀 -->
            <script src="//uicdn.toast.com/tui.chart/latest/tui-chart.min.js"></script>
        </body>
    </html>
  `;
  const cssCode1 = `
    /* Bad */
    .firstSelector {}
    #buttonId {}
    #button-id{
    ...}

    /* Good */
    .first_selector {}
    #button-id {
      ...
    }
  `;
  const cssCode2 = `
    /* Bad */
    .selector {
      padding:15px; 
      margin : 15px;  
    }


    /* Good */
    .selector {
      padding: 15px;
      margin: 15px;
    }
  `;
  const cssCode3 = `
    /* Bad */
    .selector {
      padding:15px;
    }
    .selector {padding: 15px;margin: 15px;}

    /* Good */
    .selector {padding:15px;}
    .selector {
      padding: 15px;
      margin: 15px;
    }
  `;
  const cssCode4 = `
    /* Bad */
    .selector {
      color: blue;
      margin: 20px;
      padding:15px
    }


    /* Good */
    .selector {
      color: blue;
      margin: 20px;
      padding: 15px;
    }
  `;
  const cssCode5 = `
    <button class="btn js-submit">submit</button>
  `;
  const cssCode6 = `
    /* Bad */
    margin: 1px 0px 2px 0px;
    padding: 0px;

    /* Good */
    margin: 1px 0 2px 0;
    padding: 0;

    flex: 0px; // flex-basis 컴포넌트의 경우 단위가 필요함
  `;
  const cssCode7 = `
    /* Bad */
    .no_border {border: none;}

    /* Good */
    .no_border {border: 0;}
  `;
  const cssCode8 = `
    /* Bad */
    color: #eebbcc;

    /* Good */
    color: #ebc;
  `;
  const cssCode9 = `
    /* Bad */
    span { ... }
  `;
  const cssCode10 = `
    /* Bad */
    span[class^="main"] { ... }

    /* Good */
    .main { ... }
  `;
  const cssCode11 = `
    /* Bad */
    font-family: 'Open Sans', 'Noto Serif ', sans-serif;
    font-size: 100%;
    line-height: 1.6;
    padding-bottom: 2px;
    padding-left: 1px;
    padding-right: 1px;
    padding-top: 0;

    /* Good */
    font: 100%/1.6 'Open Sans', 'Noto Serif ', sans-serif;
    padding: 0 1px 2px;
  `;
  const cssCode12 = `
    /* Bad */
    .element {
      margin: 0 0 10px 0;
      background: #c83636;
      background: url("back.jpg");
    }

    /* Good */
    .element {
      margin-bottom: 10px;
      background-color: #c83636;
      background-image: url("back.jpg");
  `;
  const cssCode13 = `
    /* 1 */
    .sr_only {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
      clip-path: inset(50%);
      white-space: nowrap;
      overflow: hidden;
    }

    /* 2 */
    .hidden_visually {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  `;
  const cssCode14 = `
    /* Bad */
    .selector, .selector-secondary, .selector[type=text] {
      ...
    }

    /* Good */
    .selector,
    .selector-secondary,
    .selector[type="text"] {
      ...
    }
  `;
  const scssCode1 = `
    /* 아래 파일을 common.scss로 합친다. */
    _button.scss
    _checkbox.scss
    _input.scss
    _mixin.scss
    _popup.scss
    _radio.scss
    _select.scss
    _table.scss
    _variables.scss
    ...

    /* import 방법 */
    @import "include/variable";
    @import "include/mixin";
    @import "include/reset";
    @import "include/common";
    @import "include/layout";
    ...
  `;
  const scssCode2 = `
    /* Bad */
    $mainColor: blue;
    $main_color: blue;

    /* Good */
    $main-color: blue;
  `;
  const scssCode3 = `
    @mixin button($color) {
      background-color: $color;
      border-radius: 5px;
      padding: .25em .5em;
      &:hover {
        cursor: pointer;
      background-color: $color;
      border-color: $color;
      }
    }
    .button-a {
      @include button(#b4d455);
    }
    .button-b {
      @include button(#c0ffee);
    }
  `;
  const scssCode4 = `
    .button-a {
      background-color: #b4d455;
      border-radius: 5px;
      padding: .25em .5em;
    }
    .button-a:hover {
      cursor: pointer;
      background-color: #b4d455;
      border-color: #b4d455;
    }

    .button-b {
      background-color: #c0ffee;
      border-radius: 5px;
      padding: .25em .5em;
    }
    .button-b:hover {
      cursor: pointer;
      background-color: #c0ffee;
      border-color: #c0ffee;
    }
  `;
  const scssCode5 = `
    // base.scss
    %message {
      border: 1px solid #ccc;
      padding: 10px;
      color: #333;
    }

    .success {
      @extend %message;
      border-color: green;
    }

    .error {
      @extend %message;
      border-color: red;
    }

    // output.css
    .success, .error {
      border: 1px solid #ccc;
      padding: 10px;
      color: #333;
    }

    .success {
      border-color: green;
    }

    .error {
      border-color: red;
    }
  `;
  const scssCode6 = `
    .wrapper {
      .container {
        .content {
          .inner {
            ...
          }
        }
      }
    }
  `;
  const jsCode1 = `
    // Bad
    function sum(x, y) {
      result = x + y;
      return result;
    }

    // Bad
    function foo() {
      let a = b = 0; // let a = (b = 0);와 같다. b가 암묵적 전역이 된다.
    }
    // Good
    function sum(x, y) {
      let result = x + y;
      return result;
    }

    // Good
    function foo() {
      let a, b;
      a = b = 0;
    }
  `;
  const jsCode2 = `
    // Bad - 블록 스코프 밖에서 변수 선언
    function foo() {
      const len = this._array.length;
      let i = 0;
      let j = 0;
      let len2, item;

      for (; i < len; i += 1) {
          ...
      }
      
      len2 = this._array2.length;
      for (j = 0, len2 = this._array2.length; j < len2; j += 1) {
          item = this._array2[j];
          ...
      }
    }

    // Good 
    function foo() {
      const len = this._array.length;
      for (let i = 0; i < len; i += 1) {
          ...
      }

      // 사용 시점에 선언 및 할당
      const len2 = this._array2.length;
      for (let j = 0; j < len2; j += 1) {
          const item = this._array2[j];
          ...
      }
    }
  `;
  const jsCode3 = `
    const lodash = require('lodash');
    const $ = require(jquery);
    const handlebars = require('handlebars');
    const d3 = require('d3');

    const pluginFactory from '../../factories/pluginFactory';
    const predicate from '../../helpers/predicate';
    const raphaelRenderUtil from '../../plugins/raphaelRenderUtil';
  `;
  const jsCode4 = `
    const len = items.length;
    let i;

    // Bad
    for (i = 0; i < len; i++) {
      itemsCopy[i] = items[i];
    }

    // Good
    const itemsCopy = [...items];
  `;
  const jsCode5 = `
    // Bad
    const d = [1,
      2, 3];
    const e = [
      function foo() {
        dosomething();
      }, function bar() {
        dosomething();
      }
    ];

    // Good
    const a = [1, 2, 3];
    const b = [
      1, 
      2, 
      3
    ];
  `;
  const jsCode6 = `
    // Bad - 함수 생성자 사용
    const doSomething = new Function('param1', 'param2', 'return param1 + param2;');

    // Good - 함수 선언식 사용
    function doSomething(param1, param2) {
      return param1 + param2;
    }

    // Good - 함수 표현식 사용
    const doSomething = function(param1, param2) {
      return param1 + param2;
    };
  `;
  const jsCode7 = `
    // Bad - 선언 이전에 사용
    const sumedValue = sum(1, 2);
    const sum = function(param1, param2) {
      return param1 + param2;
    };

    // Bad - 선언 이전에 사용
    const sumedValue = sum(1, 2);
    function sum(param1, param2) {
      return param1 + param2;
    };

    // Good
    const sum = function(param1, param2) {
      return param1 + param2;
    };
    const sumedValue = sum(1, 2);
  `;
  const jsCode8 = `
    // Bad
    [1, 2, 3].map(function (x) {
      const y = x + 1;
      return x * y;
    });

    // Good
    [1, 2, 3].map(x => {
      const y = x + 1;
      return x * y;
    });
  `;
  const jsCode9 = `
    // Bad
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });

    // Good
    [1, 2, 3].map(x => x * x);

    // Good
    [1, 2, 3].reduce((y, x) => x + y);
  `;
  const jsCode10 = `
    // Bad
    [1, 2, 3].map((x) => {
      const y = x + 1;
      return x * y;
    });

    // Good
    [1, 2, 3].map(x => x * x);

    // Good
    [1, 2, 3].reduce((y, x) => x + y);
  `;
  
  return (
    <>
      <div className={`${styles.code_container} spring_container`}>
        <h2 className="title">퍼블리싱 코드 규칙</h2>
        <div className="tabs">
          <button
            className={`tab-link ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => setActiveTab("tab1")}
          >
            HTML
          </button>
          <button
            className={`tab-link ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => setActiveTab("tab2")}
          >
            CSS
          </button>
          <button
            className={`tab-link ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => setActiveTab("tab3")}
          >
            SCSS
          </button>
          <button
            className={`tab-link ${activeTab === "tab4" ? "active" : ""}`}
            onClick={() => setActiveTab("tab4")}
          >
            JAVASCRIPT
          </button>
        </div>
        <div className="tab-contents">
          <div id="tab1" className={`tab ${activeTab === "tab1" ? "active" : ""}`}>
            <section className={styles.html_code_inner}>
              <h3 className="guide-title">HTML 규칙</h3>
              <div className="contents_wrap">
                <h4 className="sub-title">적절한 태그 및 속성 사용</h4>
                <ul>
                  <li>
                    클릭했을 때 이벤트가 발생하는 경우 <code className="mu-code-label">button</code> 태그를 사용한다.
                  </li>
                  <li>
                    클릭했을 때 다른 페이지로 넘어가는 경우 <code className="mu-code-label">a</code> 태그를 사용한다.
                  </li>
                  <li>
                    <code className="mu-code-label">a</code> 태그 안에 <code className="mu-code-label">button</code> 태그를 넣는 등 인터랙티브 요소에 인터랙티브 요소를 넣지 않도록 한다.
                  </li>
                  <li>
                    단락이 아닌 경우, 단순히 <code className="mu-code-label">block</code> 속성을 사용하기 위해서 <code className="mu-code-label">p</code> 태그를 사용하지 않는다.
                  </li>
                  <li>
                    <code className="mu-code-label">heading</code> 태그는 레벨 순서를 지켜 작성한다.
                  </li>
                  <li>
                    <code className="mu-code-label">button</code> 태그에는 <code className="mu-code-label">type</code>을 명시한다.
                  </li>
                  <li>레이아웃을 표현하기 위하여 표를 사용하지 않는다.</li>
                </ul>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">웹접근성</h4>
                <ul>
                  <li>
                    <code className="mu-code-label">img</code> 이미지를 생성할 땐 웹 접근성, 웹 표준을 위해서 alt를 꼭 입력해줘야 하며 의미없는 이미지에 한하여 빈 값을 허용한다.
                  </li>
                  <li>
                    <code className="mu-code-label">input</code> 요소에 <code className="mu-code-label">id</code>속성을 설정하고 <code className="mu-code-label">label</code>요소의 <code className="mu-code-label">for</code> 속성으로 연결하고 <code className="mu-code-label">title</code> 값을 지정하여야 한다.
                  </li>
                  <li>
                    각 입력 폼 요소마다 고유한 <code className="mu-code-label">title</code> 값을 지정해야 한다. 이렇게 하면 사용자들이 폼 요소의 목적을 쉽게 이해할 수 있다.
                    예를 들어, 이름 입력 필드에는 title="이름"과 같이 설정하는 식이다. 
                  </li>
                  <li>
                    적절한 태그로 작성이 어려울 경우 <a className='guide_link' href="" target="_blank">wai-aria</a>속성을 사용한다.
                  </li>
                  {/* <li>
                    <code className="mu-code-label">body</code> 상단에 본문 바로가기 링크를 제공하여야 한다.
                  </li> */}
                  <li>키보드 탭키 이동으로 접근이 불가능한 내용이 없어야 한다.</li>
                </ul>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">ID와 클래스</h4>
                <ul>
                  <li>
                    ID는 개발을 위해서만 사용하고, 퍼블리싱 작업시에는 클래스를 활용한다.
                  </li>
                  <li>
                    불가피한 경우를 제외하고 클래스명은 직관적으로 짓는다.
                  </li>
                  <li>
                    css를 사용할 경우 체인 선택자의 개수는 3개까지 권장한다.
                  </li>
                  <li>
                    클래스명에 넘버링은 최대한 지양한다.
                  </li>
                  <li>
                    id 네이밍룰 : 카멜표기법 사용 (단어와 단어의 사이를 대문자로 구분)
                  </li>
                  <li>
                    class 네이밍룰 : 언더스코어(_) 표기법 (단어와 단어의 사이를 _로 구분)
                  </li>
                  <li>
                    class 중 정렬 또는 칼라를 표현하는 네이밍의 경우 예외적으로 카멜표기법 사용한다.<br />
                    ex) ex. alL, alC, pointBl 
                  </li>
                </ul>
              </div>
            </section>
            <section className={styles.html_code_inner}>
              <h3 className="guide-title">HTML 규칙 예시</h3>
              <div className="contents_wrap">
                <div className="contents">
                  <h4 className="sub-title">기본 스타일</h4>
                  <p className="text">
                    들여쓰기는 공백(space) 2문자를 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode1}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    속성값에는 반드시 큰따옴표("")를 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode2}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    태그명, 속성명, 속성값 등에는 모두 소문자만 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode3}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">Boolean 속성은 값을 따로 명시하지 않는다.</h4>
                <div className="contents">
                  <p className="text">
                    selected, disabled, checked 등의 Boolean 속성은 값을 따로
                    명시하지 않는다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode4}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">불필요한 태그 작성을 피한다.</h4>
                <div className="contents">
                  <p className="text">
                    가능하다면 불필요한 태그 작성을 피해야 한다. HTML 문서의
                    크기가 작을수록 네트워크를 통해 전송되는 데이터 양은
                    줄어든다. HTML 문서의 깊이가 얕을수록 브라우저가 렌더링할
                    때 사용하는 렌더 트리가 가벼워지므로, 렌더링 속도가
                    빨라진다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode5}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">목적에 맞는 HTML 태그를 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    목적에 맞는 HTML 태그를 사용한다. 예를 들어 제목을 나타낼
                    경우 &lt;h&gt; 태그, 문단을 나타낼 경우 &lt;p&gt; 태그,
                    링크를 나타낼 경우 &lt;a&gt; 태그 등을 사용한다. 또한,
                    HTML5에서 추가된 &lt;header&gt;, &lt;nav&gt;,
                    &lt;article&gt; 등 시멘틱 태그를 사용하여 문서를 작성하면
                    접근성, 재사용성, 검색엔진 최적화(Search Engine
                    Optimization) 등에 도움이 된다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode6}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">
                  CSS/자바스크립트 파일을 불러오는 경우 type을 명시하지 않는다.
                </h4>
                <div className="contents">
                  <p className="text">
                    HTML5 스펙에 따르면 CSS나 자바스크립트 파일을 불러오는
                    경우 type 속성의 기본값이 각각 text/css, text/javascript로
                    지정되어 있으므로, 속성값을 명시하지 않는다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode7}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">CSS는 상단, 자바스크립트는 하단에서 불러온다.</h4>
                <div className="contents">
                  <p className="text">
                    자바스크립트를 &lt;head&gt;에 포함할 경우, 자바스크립트
                    파일을 전부 다운로드하고, 파싱, 컴파일 할 때까지 페이지
                    렌더링이 지연되기 때문에 &lt;body&gt;하단에 포함 시킨다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{htmlCode8}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="tab2" className={`tab ${activeTab === "tab2" ? "active" : ""}`}>
            <div className={styles.css_code_inner}>
              <h3 className="guide-title">CSS 규칙</h3>
              <div className="contents_wrap">
                <h4 className="sub-title">선택자 및 우선순위</h4>
                <ul className="">
                  <li>
                    공통 선택자(<code className="mu-code-label">*</code>)는 웹페이지의 성능 저하를 가져오므로 사용하지 않는다.
                  </li>
                  <li>
                    태그는 언제든지 다른 태그로 변경될 수 있으므로 태그 선택자로 스타일을 작성하지 않는다.
                  </li>
                  <li>
                    <code className="mu-code-label">!important</code> 는 불가피한 상황을 제외하고는 사용하지 않는다.
                  </li>
                  <li>
                    인라인 스타일의 우선 순위가 높으므로 인라인 스타일의 사용은 최소한으로 한다.
                  </li>
                  <li>
                    선택자를 다수 작성할수록 우선 순위가 높아지므로 선택자는 가능하다면 최소 단위 / 루트 단위로 진행한다.
                  </li>
                  <li>
                    클래스명이 자주 쓰이는 명칭일 경우 선택자를 하나, 두 개 정도 추가 작성한다.
                  </li>
                </ul>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">주석 빈줄</h4>
                <ul className="">
                  <li>
                    종료 주석은 작성하지 않는다.
                  </li>
                  <li>
                    코드 그룹 간 1줄의 빈 줄을 허용한다. 단, 1줄을 초과하지 않는다.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.css_code_inner}>
              <h3 className="guide-title">CSS 규칙 예시</h3>
              <div className="contents_wrap">
                <h4 className="sub-title">기본 스타일</h4>
                <div className="contents">
                  <p className="text">
                    들여쓰기는 공백 2문자를 사용한다. 클래스, 아이디명은 카멜 케이스(camelCase)방식을 사용한다.<br />
                    가독성을 위해 선언 블록을 여는 중괄호(&#123;) 앞에는 공백 1문자를 공백으로 넣고 닫는 중괄호(&#125;)는 새로운 행에 배치한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode1}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    선언 시 : 이후 공백 1문자를 추가한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode2}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    단일 스타일은 한 줄에 표시한다. 반대로 다중 스타일은 정확한 디버깅을 위해 한 줄에 속성을 하나씩 표시한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode3}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    다중 선택 시 한 줄에 선택자를 하나씩 표시한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode14}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    모든 스타일 선언 뒤에는 세미콜론을 붙인다. 마지막 선언은 선택 사항이지만 예외를 두어 작성할 경우 오류가 발생하기 쉽다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode4}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">스타일 지정 시 아이디 대신 클래스를 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    스타일 지정을 위해서는 무조건 클래스를 사용한다. 아이디를 사용한다면 재사용성 측면뿐 아니라 <a className='guide_link' href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity" target="_blank">선택자 우선순위</a>가 매우 높기 때문에 예측하지 못한 동작을 야기할 수 있다. 만약 문서 내 링크 이동이나 for를 사용하는 특별한 경우에만 아이디를 사용한다.
                  </p>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">자바스크립트 Hook에서 스타일 지정을 위해 만들어진 클래스를 사용하지 않는다.</h4>
                <div className="contents">
                  <p className="text">
                    자바스크립트를 사용해 DOM 이벤트 핸들러를 등록할 때, 스타일 지정을 위해 사용된 클래스를 사용하지 않는다. CSS 스타일 지정과 자바스크립트 동작 제어는 서로 다른 책임을 갖기 때문에, 각각을 분리해서 관리하는 것이 유지보수 측면에서 유리하다. 이 경우 자바스크립트에서 쓸 클래스는 js-접두어를 붙이는 것을 권장한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode5}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">숫자 0 값 이후에는 불필요한 단위를 작성하지 않는다.</h4>
                <div className="contents">
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode6}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    border가 없을 경우 none대신 0을 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode7}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">
                  색상 표현
                </h4>
                <div className="contents">
                  <p className="text">
                    16진법으로 색상을 표현할 경우 다음 예시와 같이 가능하다면 3글자로 표현한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode8}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">태그 선택자 대신 클래스 선택자를 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    렌더링 성능을 위해 가능한 한 태그 선택자보다 클래스 선택자를 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode9}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    태그 선택자와 함께 속성 선택자(attribute selectors, eg&gt; [class^="..."])를 사용할 수 있지만 성능 이슈가 발생하므로 피해야한다. type 선택자를 사용할 경우 큰따옴표를 사용한다.(eg&gt; input[type="text"])
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode10}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">가능한 한 축약형을 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    padding, margin, font, background, border, border-radius 등 축약형 사용이 가능한 프라퍼티는 가능한 한 축약형을 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode11}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    불필요하게 축약형을 과용하는 것은 피한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode12}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">텍스트 숨김처리 시 아래 예시만 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    숨김 텍스트 처리할 시에 text-indent: -9999px, top: -9999px, font-size: 0, display: none 등으로 처리하지 않는다. 해당 스타일은 스크린 리더기에서 읽히지 않거나, 초점 이슈가 존재할 수 있다.<br />
                    아래 방법들은 모두 스크린 리더 사용자에게 콘텐츠를 제공하면서 시각적으로는 숨기는 데 유용하다. 각각의 상황에 맞게 적절한 방법을 선택하여 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{cssCode13}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab3" className={`tab ${activeTab === "tab3" ? "active" : ""}`}>
            <div className={styles.scss_code_inner}>
              <h3 className="guide-title">SCSS 규칙 예시</h3>
              <div className="contents_wrap">
                <h4 className="sub-title">파일 구조</h4>
                <div className="contents">
                  <p className="text">
                    파일 구조는 가능하다면 컴포넌트 형식으로 파일을 나누어 작업한다.<br />
                    컴포넌트 형식으로 파일을 나눈 후, 하나의 스타일시트에 임포트하는 방식으로 진행한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode1}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">변수명은 케밥 케이스를 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    변수명은 카멜 케이스(camelCase), 스네이크 케이스(snakecase) 방식보다 -를 사용하는 케밥 케이스(kebab-case)를 사용한다. 해당 파일에서만 쓰이는 경우 변수에 underscore(``)를 추가해서 사용할 수 있다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode2}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">믹스인</h4>
                <div className="contents">
                  <p className="text">
                    믹스인은 중복되는 스타일을 분리하거나 복잡한 스타일을 추상화하는 역할 등을 위해 마치 함수처럼 사용해야 한다. 특히 인자가 없는 믹스인은, Gzip과 같은 압축 과정 없이는 불필요한 중복 코드를 만들어낼 수 있으므로 주의한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode3}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    위 코드는 아래 코드와 같은 의미다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode4}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">Extend 지시자는 사용하지 않는다.</h4>
                <div className="contents">
                  <p className="text">
                    @extend 지시자는 코드의 유지보수를 어렵게 만들 수 있으며, 직관적이지 않습니다. 믹스인을 사용하면 스타일을 더 명확하고 유연하게 관리할 수 있습니다. Gzip과 함께 사용하면 스타일시트의 크기를 줄이는 장점도 그대로 누릴 수 있습니다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode5}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">선택자 중첩은 최대 4단계까지만 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    4단계를 넘으면 HTML과 너무 밀접하게 엮여있거나 재사용할 수 없는 CSS를 작성하고 있을 가능성이 크다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode6}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">선택자 중첩은 최대 4단계까지만 사용한다.</h4>
                <div className="contents">
                  <p className="text">
                    4단계를 넘으면 HTML과 너무 밀접하게 엮여있거나 재사용할 수 없는 CSS를 작성하고 있을 가능성이 크다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{scssCode6}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab4" className={`tab ${activeTab === "tab4" ? "active" : ""}`}>
            <div className={styles.javascript_code_inner}>
              <h3 className="guide-title">JavaScript 규칙</h3>
              <div className="contents_wrap">
                <ul className="">
                  <li>
                    space와 tab을 섞어서 사용하지 않는다.
                  </li>
                  <li>
                    한 줄에 하나의 문장만 허용하며, 문장 종료 시에는 반드시 세미콜론(;)을 사용한다.
                  </li>
                  <li>
                    카멜 케이스을 사용한다.
                  </li>
                  <li>
                    (지역 변수 or private 변수)명은 '_'로 시작한다.
                  </li>
                  <li>
                    URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.javascript_code_inner}>
              <h3 className="guide-title">JavaScript 규칙 예시</h3>
              <div className="contents_wrap">
                <h4 className="sub-title">전역 변수</h4>
                <div className="contents">
                  <p className="text">
                    자바스크립트는 전역 변수에 기반을 둔다. 즉, 모든 컴파일 단위는 하나의 공용 전역 객체(window)에 로딩된다. 전역 변수는 언제든지 프로그램의 모든 부분에서 접근할 수 있기 때문에 편하지만, 바꿔 말하면 프로그램의 모든 부분에서 변경될 수 있고, 그로 인해 프로그램에 치명적인 오류를 발생시킬 수 있다.
                  </p>
                </div>
                <div className="contents">
                  <p className="text">
                    암묵적 전역 변수를 사용하지 않는다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode1}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">선언과 할당</h4>
                <div className="contents">
                  <p className="text">
                    const를 우선하여 선언하면 "이 변수는 결코 재 할당되지 않습니다"라고 알려줌으로써 코드를 읽기 쉽게 하여 유지보수에 도움이 된다. let은 블록 범위로 할당되기 때문에 다른 많은 프로그래밍 언어에서와 같은 규칙으로 적용되어 실수를 피하는데 도움이 된다.<br />
                    var는 절대로 사용하지 않도록 한다.
                  </p>
                  <p className="text">
                    const를 let 보다 위에 선언한다.
                  </p>
                  <p className="text">
                    const와 let은 사용 시점에 선언 및 할당을 한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode2}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    외부 모듈과 내부 모듈을 구분하여 사용한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode3}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">배열과 객체</h4>
                <div className="contents">
                  <p className="text">
                    배열 복사 시 순환문을 사용하지 않는다.
                    복잡한 객체를 복사할 때 전개 연산자를 사용하면 좀 더 명확하게 정의할 수 있고 가독성이 좋아진다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode4}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    배열의 요소중 하나라도 줄 바꿈이 있다면 배열 안의 요소는 일관되게 모두 줄 바꿈을 해주어야 한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode5}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">함수</h4>
                <div className="contents">
                  <p className="text">
                    함수 생성자를 사용하여 선언하지 않는다.<br />
                    문자열로 전달되는 파라미터가 수행 시점에 eval로 처리되어 실행 속도가 느려진다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode6}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    함수는 사용 전에 선언해야 하며, 함수 선언문은 변수 선언문 다음에 오도록 한다.<br />
                    함수 표현식으로 생성된 함수는 호이스팅 시 값이 할당되지 않으므로 선언 이전에 사용하면 오류가 발생한다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode7}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">화살표 함수</h4>
                <div className="contents">
                  <p className="text">
                    함수 표현식 대신 화살표 함수를 사용한다.<br />
                    화살표 함수는 별도의 this 바인딩 없이 상위 컨텍스트에 바인딩되기 때문에 함수 표현식보다 혼란이 적으며 덜 장황하고 추론이 쉽다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode8}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    화살표 함수의 파라미터가 하나이면 괄호를 생략한다.<br />
                    파라미터가 하나일 때 괄호를 생략하면 화살표 함수의 장점을 살릴 수 있다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode9}</code>
                    </pre>
                  </div>
                </div>
              </div>
              <div className="contents_wrap">
                <h4 className="sub-title">화살표 함수</h4>
                <div className="contents">
                  <p className="text">
                    함수 표현식 대신 화살표 함수를 사용한다.<br />
                    화살표 함수는 별도의 this 바인딩 없이 상위 컨텍스트에 바인딩되기 때문에 함수 표현식보다 혼란이 적으며 덜 장황하고 추론이 쉽다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode8}</code>
                    </pre>
                  </div>
                </div>
                <div className="contents">
                  <p className="text">
                    화살표 함수의 파라미터가 하나이면 괄호를 생략한다.<br />
                    파라미터가 하나일 때 괄호를 생략하면 화살표 함수의 장점을 살릴 수 있다.
                  </p>
                  <div className="spring_code_inner">
                    <pre>
                      <code>{jsCode9}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RuleCode;
