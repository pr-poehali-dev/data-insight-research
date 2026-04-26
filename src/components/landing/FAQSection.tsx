import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Как сделать заказ в «ВерАлекс»?",
    answer:
      "Вы можете прийти к нам в магазин, написать в директ или позвонить по телефону. Наши флористы помогут подобрать идеальный букет или набор для любого случая.",
  },
  {
    question: "Есть ли доставка цветов и подарков?",
    answer:
      "Да! Мы доставляем букеты, свечи и подарочные наборы. Также доступен самовывоз из магазина. Уточните условия и стоимость доставки по телефону или в директ.",
  },
  {
    question: "Можно ли заказать букет по индивидуальному пожеланию?",
    answer:
      "Конечно! Наши флористы соберут букет по вашим пожеланиям: нужные цветы, цвета, размер и бюджет. Просто расскажите нам о поводе — мы создадим идеальный подарок.",
  },
  {
    question: "Какие свечи у вас есть?",
    answer:
      "У нас большой выбор ароматических свечей: ваниль, лес, цитрус, классический воск и другие. Регулярно появляются новые коллекции. Приходите — всегда есть что-то особенное!",
  },
  {
    question: "Делаете ли вы оформление шарами на мероприятия?",
    answer:
      "Да! Мы предлагаем латексные и фольгированные шары, цифры и буквы. Поможем оформить день рождения, свадьбу или любой другой праздник. Свяжитесь с нами заранее для обсуждения деталей.",
  },
  {
    question: "Что входит в готовые подарочные наборы?",
    answer:
      "У нас есть несколько наборов: «Романтика» (букет роз + свеча), «Детский восторг» (игрушка + шары), «Уютный вечер» (подсвечник + чайные свечи). Это готовое решение с душой!",
  },
];

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Левая колонка - заголовок */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Часто задаваемые вопросы
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Всё, что нужно знать о магазине,
            <br className="hidden md:block" />
            заказах и доставке.
          </div>
        </div>

        {/* Правая колонка - FAQ */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}