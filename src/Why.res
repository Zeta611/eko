@react.component
let make = () => {
  <article className="px-6 py-12 max-w-xl mx-auto md:max-w-4xl prose">
    <h1> {"쉬운 전문용어"->React.string} </h1>
    <div className="text-right text-sm">
      <a href="http://kwangkeunyi.snu.ac.kr">
        {"서울대학교 컴퓨터공학부 이광근"->React.string}
      </a>
    </div>
    <div className="divider" />
    <h2> {"배경"->React.string} </h2>
    <p>
      {"전문지식이 전문 학자들에만 머문다면 그 분야는 그렇게 쇠퇴할 수 있다. 저변이 좁아지고 깊은 공부를 달성하는 인구는 그만큼 쪼그라들 수 있다."->React.string}
    </p>
    <p>
      {"전문지식이 보다 많은 사람들에게 널리 퍼진다면, 그래서 더 발전할 힘이 많이 모이는 활기찬 선순환이 만들어진다면. 그러면 그 분야를 밀어올리는 힘은 나날이 커질 수 있다. 더 많은 사람들이 더 나은 성과를 위한 문제제기와 답안제안에 참여할 수 있고, 전문가의 성과는 더 널리 이해되고 더 점검받을 수 있게된다."->React.string}
    </p>
    <p>
      {"그러므로 쉬운 전문용어가 어떨까. 전문개념의 핵심을 쉽게 전달해주는 전문용어. 학술은 학술의 언어를 --우리로서는 소리로만 읽을 원어나 한문을-- 사용해야만 정확하고 정밀하고 경제적일까? 아무리 정교한 전문지식이라도 쉬운 일상어로 짧고 정밀하게 전달될 수 있다. 시에서 평범한 언어로 밀도 있게 전달되는 정밀한 느낌을 겪으며 짐작되는 바이다."->React.string}
    </p>
    <p>
      {"쉬운 전문용어가 활발히 만들어지고 테스트되는 생태계. 이것이 울타리없는 세계경쟁에서 우리를 깊고 높게 키워줄 비옥한 토양이다. 시끌벅적 쉬운말로 하는 학술의 재미는 말할것도 없다."->React.string}
    </p>
    <h2> {"원칙"->React.string} </h2>
    <p> {"쉬운 전문용어를 만들때 원칙은 다음과 같다."->React.string} </p>
    <ul>
      <li> {"전문용어의 의미를 정확히 이해하도록 한다."->React.string} </li>
      <li> {"그 의미가 정확히 전달되는 쉬운말을 찾는다."->React.string} </li>
      <li>
        {"이때, 어깨에 힘을 뺀다. 지레 겁먹게하는 용어(불필요한 한문투)를 피하고, 가능하면 쉬운말을 찾는다."->React.string}
      </li>
      <li>
        {"전문용어 하나에 쉬운 한글용어 하나가 일대일 대응일 필요가 없이, 상황에 따라서 다양하게 풀어쓸 수 있다. 중요한 것은 의미의 명확한 전개."->React.string}
      </li>
      <li>
        {"원문 전문용어는 해당 우리말 다음에 괄호안에 항상 따라붙인다."->React.string}
      </li>
      <li>
        {"도저히 우리말을 찾을 수 없을 땐, 소리나는대로 쓰고 괄호안에 원문 전문용어를 따라붙인다."->React.string}
      </li>
      <li>
        {"기존의 권위에 얽매이지 않는다. 기존 용어사전이나 이미 널리퍼진 용어지만 쉽지않다면, 보다 쉬운 전문용어를 찾고 실험한다. 이때, 기존용어는 원문 전문용어와 함께 괄호안에 따라붙인다."->React.string}
      </li>
      <li>
        {"쉬운말은 순수 우리말을 뜻하지 않는다. 외래어라도 널리 쉽게 받아들여진다면 사용한다."->React.string}
      </li>
    </ul>
  </article>
}
