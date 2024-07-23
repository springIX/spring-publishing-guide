import React from "react";
import styles from "./WaiAria.module.scss";

const WaiAria = () => {
  return (
    <>
      <div className={`${styles.waiaria_container} spring_container`}>
        <h2 className="title">WAI-ARIA</h2>
        <section className={styles.ariaroles_inner}>
          <h3 className="guide-title">Aria Roles</h3>
          <div className="contents_wrap">
            <div className="contents">
              <h4 className="sub-title">role 속성이란?</h4>
              <p className="text">
                HTML role 속성은 HTML 요소(Element)의 확장 개념으로 좀 더 명확한
                HTML 요소의 구조와 의미를 부여하는 역할을 하는 속성입니다.
              </p>
              <p className="text">
                이 속성은 웹 접근성을 향상시키기 위해 HTML5부터 도입되었으며,
                WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet
                Applications) 명세의 일부입니다. 이 명세는 웹 콘텐츠의 접근성을
                향상시키기 위한 표준을 제공합니다.
              </p>
            </div>
            <div className="contents">
              <h4 className="sub-title">role 속성 종류 및 값</h4>
              <table className="mu-table vertical">
                {/* <colgroup><col style="width: 15%;"><col style="width: 20%;"><col style="width: 20%;"><col></colgroup> */}
                <thead>
                  <tr>
                    <th>분류</th>
                    <th>구분</th>
                    <th>이름</th>
                    <th>설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="8" className="mu-align-center">
                      <div className="mu-table-cell">양식</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">입력 서식</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="form"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;form&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">자유 형식 입력 텍스트</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="textbox"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="text"&gt;
                        </code>
                        ,{" "}
                        <code className="mu-code-label">&lt;textarea&gt;</code>,{" "}
                        <code className="mu-code-label">aria-multiline=""</code>{" "}
                        속성으로 줄바꿈 처리 적용
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">일반 형식 입력 텍스트</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="input"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="text"&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">라디오</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="radio"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="radio"&gt;
                        </code>
                        , "라디오그룹"으로 묶어주어야 함.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">체크박스</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="chekbox"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="checkbox"&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">선택목록</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="combobox"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;select&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">선택옵션</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="option"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;option&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">슬라이더</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="slider"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="range"&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="6" className="mu-align-center">
                      <div className="mu-table-cell">표</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">표</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="table"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;table&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">행그룹</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="rowgroup"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;thead&gt;</code>,{" "}
                        <code className="mu-code-label">&lt;tbody&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">행</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="row"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;tr&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">제목(열)</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="columnheader"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;th scope="col"&gt;
                        </code>
                        , 그리드인 경우{" "}
                        <code className="mu-code-label">aria-colindex=""</code>
                        와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">제목(행)</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="rowheader"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;th scope="row"&gt;
                        </code>
                        , 그리드인 경우{" "}
                        <code className="mu-code-label">aria-rowindex=""</code>
                        와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">내용</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="cell"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;td&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="5" className="mu-align-center">
                      <div className="mu-table-cell">HTML5</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">네비게이션</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="navication"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;nav&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">일반 섹션</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="section"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;section&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">Article</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="article"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;article&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">메인 컨텐츠</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="main"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;main&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">그래픽 문서</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="figure"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;figure&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="4" className="mu-align-center">
                      <div className="mu-table-cell">기본요소</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">버튼</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="button"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;button&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">이미지</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="img"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;img&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">링크</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="link"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;a&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">선</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="separator"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;hr&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="3" className="mu-align-center">
                      <div className="mu-table-cell">목록, 정의 요소</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">목록의 그룹</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="list"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;ul&gt;, &lt;ol&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">목록의 단일항목</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="listitem"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;li&gt;, &lt;dt&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">데이터리스트</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="listbox"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        동일한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;datalist&gt;</code>{" "}
                        (사파리 미지원 태그)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="10" className="mu-align-center">
                      <div className="mu-table-cell">비슷한 HTML 요소</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">주요 제목</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="heading"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;h1&gt;</code> ~{" "}
                        <code className="mu-code-label">&lt;h6&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">중요한 섹션</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="region"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;section&gt;</code>,
                        중요한 내용을 포함하는 인식 가능한 섹션
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">그리드</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="grid"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;table&gt;</code>,{" "}
                        <code className="mu-code-label">aria-colcount=""</code>
                        와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">그리드 내용</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="gridcell"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;td&gt;</code>,
                        그리드의 경우{" "}
                        <code className="mu-code-label">aria-colindex=""</code>
                        와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">정의 제목</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="term"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;dt&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">정의 내용</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="definition"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;dd&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">슬라이더</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="range"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="range"&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">스핀버튼</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="spinbutton"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">
                          &lt;input type="number"&gt;
                        </code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">Contentinfo</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="contentinfo"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;footer&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">보완적인 랜드 마크</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="complementary"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        비슷한 HTML 요소{" "}
                        <code className="mu-code-label">&lt;aside&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="4" className="mu-align-center">
                      <div className="mu-table-cell">기타</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">라디오 그룹</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="radiogroup"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        "라디오 그룹"으로 역할 정의
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">섹션 제목</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="sectionhead"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">추상적인 역할</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">선택 목록</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="select"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">추상적인 역할</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="mu-table-cell">텍스트</div>
                    </td>
                    <td className="mu-code-font">
                      <div className="mu-table-cell">role="text"</div>
                    </td>
                    <td>
                      <div className="mu-table-cell">
                        이미지를 텍스트로만 읽도록 사용, 마크업에 의해 분리된
                        텍스트를 한번에 읽도록 사용
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WaiAria;
