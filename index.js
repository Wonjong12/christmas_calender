// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "숭히야 안녕" },
  { "number": 2, "message": "난 원종이야 ㅋㅋㅋㅋ" },
  { "number": 3, "message": "우리 벌써 2학년이 끝났어~ 웬일~~~" },
  { "number": 4, "message": "이 웹사이트가 누가 써주는게 아니라 내가 이미 작성한 편지를" },
  { "number": 5, "message": "누가 하루에 한 개씩 열어볼 수 있는거더라구" },
  { "number": 6, "message": "그래서 꽤나 흥?미롭길래 한번 써본다 ㅋㅋㅋ 어쩔" },
  { "number": 7, "message": "어... 음... 무슨 말을 해야할지 모르겠당" },
  { "number": 8, "message": "그 썸네일도 내가 만들었어 어때 만족해?" },
  { "number": 9, "message": "원숭이에 산타 모자도 써놨다구~~" },
  { "number": 10, "message": "어... 그리고... 으~ 아~~" },
  { "number": 11, "message": "장난이고 이제부터 진짜다 ㅋ" },
  { "number": 12, "message": "이번 년도 ㄹㅇ 다사다난 고난과 역경 그 자체였는데" },
  { "number": 13, "message": "고생 많았다 편식쟁이 승연." },
  { "number": 14, "message": "내가 옆에서 음침하게 지켜본 사람으로서" },
  { "number": 15, "message": "정말 잘 해냈다고 본다. 결과를 떠나서 넌 내가 아는 사람 중에 가장 성실하다고 자부할 수 있다." },
  { "number": 16, "message": "(물론 주변에 아는 사람이 그렇게 많진 않음)" },
  { "number": 17, "message": "뭐 아무튼간에 토 달지 말고. 그냥 그렇다. 뭐 다른 할 말은 없다." },
  { "number": 18, "message": "난 왜 너랑 그렇게 힘든 팀플을 한번도 못 해보는지.. 옆에서 정말 많이 도와주고 싶은데" },
  { "number": 19, "message": "오히려 너랑 이렇게 살?짝 모르는 상태로 옆에서 응원을 해주는게 더 좋은건가 싶기도 함" },
  { "number": 20, "message": "아무래도 같이 붙어서 성과를 내다 보면 안 맞는게 있을지도 모르고.. 머.. 어쩌라고 콱시" },
  { "number": 21, "message": "그래서 싸울지도 모르지만 그래도 다음 학기엔 같이 그런 과제를 해보고 싶다~~ 이말이야" },
  { "number": 22, "message": "할 말이 무슨 같이 팀플하자는 얘기밖에  없냐 히히" },
  { "number": 23, "message": "마무리로 정말 매우 이렇게 ~~ 이렇게~!!~! 수고 많았고 좀 이제 놀장" },
  { "number": 24, "message": "똥! ㅋㅋ 히히 메리 크리스마스 김승연~😘" }
];

