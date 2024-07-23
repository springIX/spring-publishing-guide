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
              <h4 className="sub-title">TAG Roles</h4>
              <table>
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
                    <td rowspan="7">
                      <div>양식</div>
                    </td>
                    <td>
                      <div>입력 서식</div>
                    </td>
                    <td>
                      <div>role="form"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;form&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>자유 형식 입력 텍스트</div>
                    </td>
                    <td>
                      <div>role="textbox"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;input type="text"&gt;</code>,
                        <code>&lt;textarea&gt;</code>,
                        <code>aria-multiline=""</code>
                        속성으로 줄바꿈 처리 적용
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>라디오</div>
                    </td>
                    <td>
                      <div>role="radio"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;input type="radio"&gt;</code>,
                        "라디오그룹"으로 묶어주어야 함.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>체크박스</div>
                    </td>
                    <td>
                      <div>role="chekbox"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;input type="checkbox"&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>선택목록</div>
                    </td>
                    <td>
                      <div>role="combobox"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;select&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>선택옵션</div>
                    </td>
                    <td>
                      <div>role="option"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;option&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>슬라이더</div>
                    </td>
                    <td>
                      <div>role="slider"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;input type="range"&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="6">
                      <div>표</div>
                    </td>
                    <td>
                      <div>표</div>
                    </td>
                    <td>
                      <div>role="table"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;table&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>행그룹</div>
                    </td>
                    <td>
                      <div>role="rowgroup"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;thead&gt;</code>,<code>&lt;tbody&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>행</div>
                    </td>
                    <td>
                      <div>role="row"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;tr&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>제목(열)</div>
                    </td>
                    <td>
                      <div>role="columnheader"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;th scope="col"&gt;</code>, 그리드인 경우
                        <code>aria-colindex=""</code>와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>제목(행)</div>
                    </td>
                    <td>
                      <div>role="rowheader"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;th scope="row"&gt;</code>, 그리드인 경우
                        <code>aria-rowindex=""</code>와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>내용</div>
                    </td>
                    <td>
                      <div>role="cell"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;td&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="5">
                      <div>HTML5</div>
                    </td>
                    <td>
                      <div>네비게이션</div>
                    </td>
                    <td>
                      <div>role="navication"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;nav&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>일반 섹션</div>
                    </td>
                    <td>
                      <div>role="section"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;section&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Article</div>
                    </td>
                    <td>
                      <div>role="article"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;article&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>메인 컨텐츠</div>
                    </td>
                    <td>
                      <div>role="main"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;main&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>그래픽 문서</div>
                    </td>
                    <td>
                      <div>role="figure"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;figure&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="4">
                      <div>기본요소</div>
                    </td>
                    <td>
                      <div>버튼</div>
                    </td>
                    <td>
                      <div>role="button"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;button&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>이미지</div>
                    </td>
                    <td>
                      <div>role="img"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;img&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>링크</div>
                    </td>
                    <td>
                      <div>role="link"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;a&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>선</div>
                    </td>
                    <td>
                      <div>role="separator"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;hr&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="3">
                      <div>목록, 정의 요소</div>
                    </td>
                    <td>
                      <div>목록의 그룹</div>
                    </td>
                    <td>
                      <div>role="list"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;ul&gt;, &lt;ol&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>목록의 단일항목</div>
                    </td>
                    <td>
                      <div>role="listitem"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;li&gt;, &lt;dt&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>데이터리스트</div>
                    </td>
                    <td>
                      <div>role="listbox"</div>
                    </td>
                    <td>
                      <div>
                        동일한 HTML 요소
                        <code>&lt;datalist&gt;</code>
                        (사파리 미지원 태그)
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="10">
                      <div>비슷한 HTML 요소</div>
                    </td>
                    <td>
                      <div>주요 제목</div>
                    </td>
                    <td>
                      <div>role="heading"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;h1&gt;</code> ~<code>&lt;h6&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>중요한 섹션</div>
                    </td>
                    <td>
                      <div>role="region"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;section&gt;</code>, 중요한 내용을 포함하는
                        인식 가능한 섹션
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>그리드</div>
                    </td>
                    <td>
                      <div>role="grid"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;table&gt;</code>,<code>aria-colcount=""</code>
                        와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>그리드 내용</div>
                    </td>
                    <td>
                      <div>role="gridcell"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;td&gt;</code>, 그리드의 경우
                        <code>aria-colindex=""</code>와 같이 사용됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>정의 제목</div>
                    </td>
                    <td>
                      <div>role="term"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;dt&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>정의 내용</div>
                    </td>
                    <td>
                      <div>role="definition"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;dd&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>슬라이더</div>
                    </td>
                    <td>
                      <div>role="range"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;input type="range"&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>스핀버튼</div>
                    </td>
                    <td>
                      <div>role="spinbutton"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;input type="number"&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Contentinfo</div>
                    </td>
                    <td>
                      <div>role="contentinfo"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;footer&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>보완적인 랜드 마크</div>
                    </td>
                    <td>
                      <div>role="complementary"</div>
                    </td>
                    <td>
                      <div>
                        비슷한 HTML 요소
                        <code>&lt;aside&gt;</code>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>기타</div>
                    </td>
                    <td>
                      <div>라디오 그룹</div>
                    </td>
                    <td>
                      <div>role="radiogroup"</div>
                    </td>
                    <td>
                      <div>"라디오 그룹"으로 역할 정의</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="contents">
              <h4 className="sub-title">Wiget Roles</h4>
              <table>
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
                    <td rowspan="8">
                      <div>기능</div>
                    </td>
                    <td>
                      <div>탭 메뉴그룹</div>
                    </td>
                    <td>
                      <div>role="tablist"</div>
                    </td>
                    <td>
                      <div>
                        <code>&lt;ul&gt;</code> 그룹 요소에 적용
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>탭 메뉴링크</div>
                    </td>
                    <td>
                      <div>role="tab"</div>
                    </td>
                    <td>
                      <div>
                        <code>&lt;a&gt;</code> 이벤트 요소에 적용
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>탭 내용</div>
                    </td>
                    <td>
                      <div>role="tabpanel"</div>
                    </td>
                    <td>
                      <div>
                        <code>&lt;div&gt;</code> 콘텐츠 활성화 요소에 적용
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Dialog</div>
                    </td>
                    <td>
                      <div>role="dialog"</div>
                    </td>
                    <td>
                      <div>
                        대화 상자는 사용자가 정보를 입력하거나 응답하도록하는 데
                        가장 자주 사용되는 모달
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Tooltip</div>
                    </td>
                    <td>
                      <div>role="tooltip"</div>
                    </td>
                    <td>
                      <div>요소에 대한 설명을 표시하는 문맥 팝업</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>진행표시줄</div>
                    </td>
                    <td>
                      <div>role="progressbar"</div>
                    </td>
                    <td>
                      <div>
                        오랜 시간이 걸리는 작업의 진행 상태를 표시하는
                        요소입니다.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>스위치</div>
                    </td>
                    <td>
                      <div>role="switch"</div>
                    </td>
                    <td>
                      <div>
                        체크 / 체크되지 않은 값과 반대로 <code>on</code> /{" "}
                        <code>off</code> 값을 나타내는 체크 박스 유형
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>Toolbar</div>
                    </td>
                    <td>
                      <div>role="toolbar"</div>
                    </td>
                    <td>
                      <div>
                        컴팩트 한 시각적 형태로 표현 된 일반적으로 사용되는 기능
                        버튼 또는 컨트롤 모음.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="8">
                      <div>의미</div>
                    </td>
                    <td>
                      <div>메뉴바</div>
                    </td>
                    <td>
                      <div>role="menubar"</div>
                    </td>
                    <td>
                      <div>수평으로 제시되는 메뉴</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>메뉴그룹</div>
                    </td>
                    <td>
                      <div>role="menu"</div>
                    </td>
                    <td>
                      <div>선택목록 제공</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>메뉴목록</div>
                    </td>
                    <td>
                      <div>role="menuitem"</div>
                    </td>
                    <td>
                      <div>
                        선택사항의 옵션으로만 사용되므로 선택된 상태는 적용하지
                        않음
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>스크롤바</div>
                    </td>
                    <td>
                      <div>role="scrollbar"</div>
                    </td>
                    <td>
                      <div>
                        스크롤바와 같은, 화면의 특정 영역 내에서 콘텐츠를 스크롤하는 그래픽 요소를 의미
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>상태표시줄</div>
                    </td>
                    <td>
                      <div>role="status"</div>
                    </td>
                    <td>
                      <div>
                        상태 역할은 경고에 대해 중요하지 않은 권고 정보를
                        사용자에게 제공하는 데 사용됩니다.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>경고 메세지</div>
                    </td>
                    <td>
                      <div>role="alert"</div>
                    </td>
                    <td>
                      <div>
                        사용자에게 경고하기 위해 메시지를 전달에 사용, 해당 요소가 활성화 될 때 전달됨
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>검색</div>
                    </td>
                    <td>
                      <div>role="search"</div>
                    </td>
                    <td>
                      <div>검색 기능</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>검색상자</div>
                    </td>
                    <td>
                      <div>role="searchbox"</div>
                    </td>
                    <td>
                      <div>
                        검색 기준을 지정하기위한 텍스트 상자 유형입니다.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="3">
                      <div>기타</div>
                    </td>
                    <td>
                      <div>어플리케이션</div>
                    </td>
                    <td>
                      <div>role="application"</div>
                    </td>
                    <td>
                      <div>어플리케이션 역할</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>없음</div>
                    </td>
                    <td>
                      <div>role="none"</div>
                    </td>
                    <td>
                      <div>내제된 원시적 역할을 매핑시키지 않음</div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>그룹</div>
                    </td>
                    <td>
                      <div>role="group"</div>
                    </td>
                    <td>
                      <div>
                        보조 기술에 의해 페이지 요약이나 목차에 포함되지 않는
                        사용자 인터페이스 개체 집합
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
