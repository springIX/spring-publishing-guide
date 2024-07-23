import React from 'react'
import styles from './RuleName.module.scss'

const RuleName = () => {
  return (
    <>
      <div className={`${styles.guide_container} spring_container`}>
        <h2 className="title">퍼블리싱 네임규칙</h2>
        <section className={styles.name_inner}>
          <h3 className="guide-title">표기법</h3>
          <table>
            <thead>
              <tr className={styles.table_header}>
                <th>종류</th>
                <th>구분</th>
                <th>번호</th>
                <th>예시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID Selector</td>
                <td>카멜 표기법</td>
                <td>한 자리수 (생략 가능, 2, 3)</td>
                <td>errorMessage, controlCenter</td>
              </tr>
              <tr>
                <td>Class Selector</td>
                <td>스네이크/카멜 표기법</td>
                <td>넘버링 X</td>
                <td>button_primary, button_outline, alL, pointBl</td>
              </tr>
              <tr>
                <td>SCSS 변수명</td>
                <td>케밥 표기법</td>
                <td>넘버링 X</td>
                <td>$main-color: blue;</td>
              </tr>
              <tr>
                <td>JS 생성자</td>
                <td>파스칼 표기법</td>
                <td>넘버링 X</td>
                <td>class ConstructorName {}</td>
              </tr>
              <tr>
                <td>JS 상수</td>
                <td>영문 대문자 스네이크 표기법</td>
                <td>넘버링 X</td>
                <td>SYMBOLIC_CONSTANTS;</td>
              </tr>
              <tr>
                <td>JS 변수, 함수</td>
                <td>카멜 표기법</td>
                <td>넘버링 O</td>
                <td>const onClick = () =&gt; {}; , const dogs = [];</td>
              </tr>
              <tr>
                <td>Image</td>
                <td>케밥 표기법</td>
                <td>두 자리수 (01, 02, 03)</td>
                <td>button-icon01.svg, button-icon02.svg</td>
              </tr>
              <tr>
                <td>파일 및 폴더</td>
                <td>스네이크 표기법</td>
                <td>두 자리수 (01, 02, 03)</td>
                <td>admin_page</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className={styles.name_wrap}>
          <h3 className="guide-title">ID 선택자</h3>
          <p className="text">ID는 개발을 위해서만 사용하고, <br/>퍼블리싱 작업시에는 앵커 및 label 등의 연결하는 상황 등을 제외하고는 일반적으로 사용하지 않으므로 정리하여 기재하지 않는다.</p>
        </section>
        <section className={styles.name_wrap}>
          <h3 className="guide-title">class 선택자</h3>
          <div className="contents_wrap">
            <ul>
              <li>대표하는 프로젝트명을 축약하여 프리픽스(prefix)로 사용한다.</li>
              <li>단어의 경우 직관적으로 알아볼 수 있도록 가능한 축약하지 않는다.</li>
              <li>체인 선택자의 개수는 3개까지 권장한다.</li>
              <li>클래스 예약어는 상황에 맞게 선택적으로 참고한다.</li>
            </ul>
          </div>
          <div className="contents_wrap">
            <h4 className="sub-title">레이아웃</h4>
            <table>
              <thead>
                <tr className={styles.table_header}>
                  <th>구분</th>
                  <th>태그</th>
                  <th>예약어</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>헤더</td>
                  <td>header</td>
                  <td>header_</td>
                  <td>헤더 영역</td>
                </tr>
                <tr>
                  <td>사이드</td>
                  <td>aside</td>
                  <td>aside_</td>
                  <td>사이드 영역</td>
                </tr>
                <tr>
                  <td>메인</td>
                  <td>main</td>
                  <td>main_</td>
                  <td>메인 영역</td>
                </tr>
                <tr>
                  <td>푸터</td>
                  <td>footer</td>
                  <td>footer_</td>
                  <td>푸터 영역</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contents_wrap">
            <h4 className="sub-title">영역</h4>
            <table>
              <thead>
                <tr className={styles.table_header}>
                  <th>구분</th>
                  <th>태그</th>
                  <th>예약어</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>바깥 영역</td>
                  <td>div</td>
                  <td>_wrap</td>
                  <td>UI 영역 단위로 그룹화</td>
                </tr>
                <tr>
                  <td>전체 영역</td>
                  <td>div</td>
                  <td>_container</td>
                  <td>컨텐츠의 전체 영역</td>
                </tr>
                <tr>
                  <td>안쪽 영역</td>
                  <td>section</td>
                  <td>_inner</td>
                  <td>내부 영역</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="contents_wrap">
            <h4 className="sub-title">구조</h4>
            <table>
              <thead>
                <tr className={styles.table_header}>
                  <th>구분</th>
                  <th>태그</th>
                  <th>예약어</th>
                  <th>설명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>머리글 영역</td>
                  <td>div</td>
                  <td>_header</td>
                  <td>전체 영역의 목차 포함</td>
                </tr>
                <tr>
                  <td>본문 영역</td>
                  <td>div</td>
                  <td>_contents</td>
                  <td>전체 영역의 본문</td>
                </tr>
                <tr>
                  <td>바닥글 영역</td>
                  <td>div</td>
                  <td>_footer</td>
                  <td>전체 영역의 바닥글</td>
                </tr>
                <tr>
                  <td>제목 영역</td>
                  <td>h1 &middot;&middot;&middot;</td>
                  <td>_title</td>
                  <td>전체 영역의 제목</td>
                </tr>
                <tr>
                  <td>본문 텍스트 영역</td>
                  <td>p</td>
                  <td>_text</td>
                  <td>전체 영역의 본문 텍스트</td>
                </tr>
                <tr>
                  <td>본문 텍스트 설명 영역</td>
                  <td>span</td>
                  <td>_desc</td>
                  <td>전체 영역의 본문 텍스트 설명 영역</td>
                </tr>
                <tr>
                  <td>메뉴</td>
                  <td>div</td>
                  <td>_menu</td>
                  <td>탐색 역할이 없는 선택목록 메뉴</td>
                </tr>
                <tr>
                  <td>리스트</td>
                  <td>ul</td>
                  <td>_list</td>
                  <td>ul, ol에 해당하는 반복되는 목록그룹</td>
                </tr>
                <tr>
                  <td>항목</td>
                  <td>li</td>
                  <td>_item</td>
                  <td>리스트 항목</td>
                </tr>
                <tr>
                  <td>링크</td>
                  <td>a</td>
                  <td>_link</td>
                  <td>링크 항목</td>
                </tr>
                <tr>
                  <td>버튼</td>
                  <td>button</td>
                  <td>_btn</td>
                  <td>버튼 항목</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

export default RuleName