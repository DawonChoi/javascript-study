/**

	2-1. 자동 호출 패턴
	 - 주로 라이브러리의 초기화 작업에 사용된다.
	 - 예를 들어, 페이지 로드가 완료된 후, 이벤트 핸들러를 등록하거나 객체를 생성하는 등의
	 초기 설정 작업을 해야한다.
	 이 모든 작업은 단 한번만 실행되기 때문에 재사용하기 위해 이름이 지정된 함수를 생성할 필요가 없다.
	 하지만 초기화 단계가 완료될 때까지만 사용할 임시 변수들이 필요하다.
	 이 모든 변수를 전역으로 생성하는 것은 좋지 않은 생각이다.

**/

//오늘의 요일과 일을 출력하는 프로그램을 작성하시오.
