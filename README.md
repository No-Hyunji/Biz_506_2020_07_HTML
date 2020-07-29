# UI 구현(화면구현) 프로젝트

## 2020-07-27

#### HTML(Hyper Text Markup Langu.)
* tag를 사용하여 문서를 작성하는 문서작성용 언어
* Mark Down : git의 README.md와 같은 문서를 만들 때
* tag아닌 특수문자(#, *)를 문서 첫번위치에 놓아서
 문서를 꾸미고 모양을 만드는 문서작성용 언어
* Mark Up : 시작 tag <tag>와 종료 </tag>를 이용하여 문서를 감싸서 
* 문서를 꾸미고 모양을 만드는 문서작성용 언어
* Mark Up : XML, HTML
* XML : tag에 사용되는 키워드를 임의로 만들 수 ㅣㅇㅆ다
* HTML : tag에 사용되는 키워드가 정해진 것을 사용한다

#### HTML의 Box Model
* HTML의 tag를 Box Model로 분류하면 Block, Inline으로 
분류 할 수 있다.
* Block : Content의 길이에 관계없이 화면의 왼쪽끝에서 오른쪽
끝까지를 영역으로 사용하는 tag
* Inline : Content의 길이만큼만 영역으로 사용한 tag
Inline는 여러가지 tag로 묶인 Content가 가로 방향으로 나열되어
표현될 수 있다. 
Inline tag는 문자열 중간에 있는 단어들의 모양, 색깔 등을 
바꾸는 용도부터 다양한 용도로 사용이 된다.

#### HTML의 Selector
* tag : HTML에서 사용하는 모든 tag를  Selector Tag라고 한다.
* 선택자(Selector) : HTML문서 내에서는 tag라고 불리우는 요소들이
style과 관련된 부분이 적용되면 tag selector라고 부른다
* css(Cascading Style Sheet)를 사용하여 HTML

#### index.html
* 일반적으로 홈페이지, 웹페이지라고 부르는 Browser를 통해서
접근하는 프로젝트에서 제일먼저 만나게 되는 파일
* index page, 


#### http: Hyper Text Transfer Protocol
* HTML(Hyper Text Markup Lang.)로 만든 문서파일(정보)을 인터넷을
통해서 주고받을 때 사용하는 보편적인 프로토콜
* 모든 내용을 평문(암호화 되지 않은)으로 주고받는다
* 사용자에 Web Browser를 통해서 서버에 요청(request)를 수행하면
서버는 사용자의 요청을 분석하여 여러가지 처리를 수행한 후
그 결과를 HTML방식의 코드로 만들어서 응답(Response)하는 구조로
만들어진 프로토콜이다
* 인터넷 서비스 중에서 www(World Wide Web)환경에서 사용되는
보편적인 프로토콜이다

#### http: Hyper Text Transfer Protocol Secure Socket Layer
* http 프로토콜에 암호화 기능을 추가하여 Request, Response 되는 
정보를 암호화 하여 전송한다
* http를 프로토콜로 사용하게 되면, 로그인, 회원가입시 입력한 
정보가 암호화 되어 어느정도 보안상 안전을 보장한다.
* 최근 모 포털에서 http 프로토콜을 사용하다가 중간에 개인정보가
탈취되는 사고가 난 뒤로
* 많은 웹서비스에서 http를 기본으로 사용하는 추세이다

#### 인터넷에서 PORT 개념
* 한 개의 IP주소를 가진 서버, 클라이언트(PC)는 1:1연결만을 
지원하는 체계이다
* 하지만 인터넷을 통해서 사용할 수 있는 서비스는 그 종류가 매우
다양하여 
* 1개의 IP에서 1개의 서비스만을 사용하는 것은 매우 낭비가 된다.
* OSI 7Layer에서 Layer4인 네트워크 계층에서는 1개의 IP로 1개의 
연결을 허용하도록 하고
* Layer4인 전송계층에서는 Port라는 개념을 사용하여, 여러가지
서비스를 1개의 IP주소에서 사용할 수 있도록 만들어놓은 개념

* TCP/IP 프로토콜은 OSI 7 Layer에서 Layer3와 Layer4를 사용하는
인터넷 프로토콜 규격이다.

