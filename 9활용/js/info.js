/* 
    1) 화면 요소 가져오기 
*/
    /* 상품명을 적는 입력 칸 */
    const nameInput = document.getElementById("nameInput");

    /* 가격을 적는 입력 칸 */
    const priceInput = document.getElementById("priceInput");

    /* 등록 버튼 */
    const addBtn = document.getElementById("addBtn");

    /* 상품을 검색하는 입력 칸 */
    const searchInput = document.getElementById("searchInput");

    /* 정렬 방식을 고르는 드롭다운 */
    const sortSelect = document.getElementById("sortSelect");

    /* 상품 목록이 들어갈 표의 본문(tbody) */
    const table = document.getElementById("productTable");

    /* 총합 금액을 보여주는 글자 영역 */
    const total = document.getElementById("total");

/* 
    2) 상품을 저장할 비어있는 배열 생성 
*/
    let products = [];

/* 
    3) 상품 등록: 버튼 클릭 시 실행되는 로직
*/
    /*
        - 입력 검증: 값이 비었거나 가격이 숫자가 아닌 경우 경고
        - 상품객체를 만들고 배열(products)에 추가
        - 입력창을 비우고 전체 HTML 을 다시 브라우저가 읽어들이게 하자. 
    */
    addBtn.addEventListener("click", () => {
        
        //1. 사용자가 입력 칸에 적은 값을 꺼내옵니다.
        const name = nameInput.value.trim();    // 입력한 상품명
        const price = Number(priceInput.value); // 입력한 가격을 숫자로 변환해서 저장

        //2. 잘못 입력했는지 검사합니다.(하나라도 이상하면 등록을 멈춤)
        // !name -> 이름이 비어있으면 true 
        // !price -> 가격이 0, 빈칸, 숫자가 아님(NaN) 이면 true
        if(!name || !price){

            alert("상품명과 가격을 올바르게 입력하세요.")   // 화면에 경고 메세지 팝업
            return; // () => {} 함수 즉시 종료
        }

        //3. 이 상품만의 고유번호(id)를 만듭니다.
        //   Date.now() = 지금 시각을 아주 큰 숫자(밀리초)로 알려줌 -> 매번 값이 달라 거의 겹치지 않음
        //   Math.random() = 0.0 ~ 1 사이의 무작위 실수를 반환 -> 만에 하나 겹치는 것까지 방지
        //   두 값을 더해 "겹치지 않는 번호" 를 만듭니다.
        const id = Date.now() + Math.random();

        //4. 위에서 모든 값들을 상품 객체 하나를 만들어 products 빈 배열에 추가
        //방법: push(추가할 상품 정보의 객체) <- 배열의 맨 뒤에 새 항목을 추가
        products.push({id: id, name: name, price: price});


    });


