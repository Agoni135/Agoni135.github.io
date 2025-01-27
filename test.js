document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        {
            question: "1. 当你要外出一整天，你会：",
            options: {
                A: "计划要做什么和什么时候做",
                B: "说去就去"
            },
            dimension: "JP"
        },
        {
            question: "2. 你是否：",
            options: {
                A: "容易让人了解你",
                B: "难以让人了解你"
            },
            dimension: "EI"
        },
        {
            question: "3. 你认为自己是一个：",
            options: {
                A: "比较随兴所至的人",
                B: "比较有条理的人"
            },
            dimension: "PJ"
        },
        {
            question: "4. 假如你是教师你愿意教：",
            options: {
                A: "以事实为主的课程",
                B: "设计理论的课程"
            },
            dimension: "SN"
        },
        {
            question: "5. 处理许多事情时，你喜欢：",
            options: {
                A: "随兴所至行事",
                B: "按照计划行事"
            },
            dimension: "PJ"
        },
        {
            question: "6. 下面哪个词语更合你心意：",
            options: {
                A: "仁慈慷慨的",
                B: "意志坚定的"
            },
            dimension: "FT"
        },
        {
            question: "7. 我期待的生活包含着：",
            options: {
                A: "科学合理的安排和有毅力的执行",
                B: "没有什么压力，所有的事情悄然发生和时间弹性很大"
            },
            dimension: "JP"
        },
        {
            question: "8. 你朋友邀请你去旅游，并且前一天才通知到你，你会：",
            options: {
                A: "必须先检查我的时间表",
                B: "立即收拾行李，准备出发"
            },
            dimension: "JP"
        },
        {
            question: "9. 你倾向：",
            options: {
                A: "重视情感多于逻辑",
                B: "重视逻辑多于情感"
            },
            dimension: "FT"
        },
        {
            question: "10. 与很多人在一起会：",
            options: {
                A: "令你活力倍增",
                B: "常常令你心力交瘁"
            },
            dimension: "EI"
        },
        {
            question: "11. 当你面临任务，你会喜欢：",
            options: {
                A: "开始前小心组织计划",
                B: "边做边找需要做什么"
            },
            dimension: "JP"
        },
        {
            question: "12. 在大多数情况下，你会选择：",
            options: {
                A: "顺其自然",
                B: "按程序表做事"
            },
            dimension: "PJ"
        },
        {
            question: "13. 你通常：",
            options: {
                A: "与人容易混熟",
                B: "比较沉静和矜持"
            },
            dimension: "EI"
        },
        {
            question: "14. 哪些人会更吸引你：",
            options: {
                A: "思维敏捷、想象力丰富的人",
                B: "实事求是，常识丰富的人"
            },
            dimension: "NS"
        },
        {
            question: "15. 大多数人会说你是一个：",
            options: {
                A: "重视自我隐私的人",
                B: "非常坦率开放的人"
            },
            dimension: "IE"
        },
        {
            question: "16. 在一大群人当中，通常是：",
            options: {
                A: "你介绍给大家认识",
                B: "别人介绍你"
            },
            dimension: "EI"
        },
        {
            question: "17. 对于你来说，哪个是较高的赞誉：",
            options: {
                A: "能干的",
                B: "富有同情心的"
            },
            dimension: "TF"
        },
        {
            question: "18. 你喜欢花很多时间：",
            options: {
                A: "一个人独处",
                B: "和别人在一起"
            },
            dimension: "IE"
        },
        {
            question: "19. 我倾向透过以下方式形成脑海中的概念：",
            options: {
                A: "我对有可能发生的事的想象和期许",
                B: "我对目前状况实际的认知"
            },
            dimension: "NS"
        },
        {
            question: "20. 你宁愿被人认为是一个：",
            options: {
                A: "实事求是的人",
                B: "机灵的人"
            },
            dimension: "SN"
        },
        {
            question: "21. 认识我的人倾向于形容我为：",
            options: {
                A: "热情和敏感",
                B: "逻辑和明确"
            },
            dimension: "FT"
        },
        {
            question: "22. 你会跟哪些人做朋友：",
            options: {
                A: "时常提出新想法、新创意的人",
                B: "按部就班、脚踏实地的人"
            },
            dimension: "NS"
        },
        {
            question: "23. 你做决定时，你更看重：",
            options: {
                A: "根据事实衡量",
                B: "考虑他人的感受和意见"
            },
            dimension: "TF"
        },
        {
            question: "24. 你做事时，你更喜欢：",
            options: {
                A: "按一般常规的方法去做",
                B: "构想自己的想法"
            },
            dimension: "SN"
        },
        {
            question: "25. 论事交的朋友，我倾向拥有：",
            options: {
                A: "有一些很亲密的朋友和一些认识的人",
                B: "很多认识的人和亲密的朋友"
            },
            dimension: "IE"
        },
        {
            question: "26. 我认为自己和很多人的相遇是：",
            options: {
                A: "经过思考的，或多或少有一定的目的性",
                B: "随意的、友善的，感觉好极其重要"
            },
            dimension: "TF"
        },
        {
            question: "27. 你通常较喜欢的科目是：",
            options: {
                A: "讲授概念和原则的",
                B: "讲授事实和数据的"
            },
            dimension: "NS"
        },
        {
            question: "28. 你是否经常让：",
            options: {
                A: "情感支配理智",
                B: "理智主宰情感"
            },
            dimension: "FT"
        }
    ];

    // 初始化变量
    let currentQuestion = 0;
    const answers = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    // 获取DOM元素
    const questionText = document.getElementById('question-text');
    const optionBtns = document.querySelectorAll('.option-btn');
    const progress = document.querySelector('.progress');
    const questionCounter = document.querySelector('.question-counter');
    const resultContainer = document.querySelector('.result-container');
    const questionArea = document.querySelector('.question-area');

    // 获取导航按钮
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // 存储用户答案
    const userAnswers = new Array(questions.length).fill(null);

    // 显示问题和已选答案
    function showQuestion() {
        const question = questions[currentQuestion];
        questionText.textContent = question.question;
        optionBtns[0].textContent = question.options.A;
        optionBtns[1].textContent = question.options.B;
        questionCounter.textContent = `${currentQuestion + 1}/${questions.length}`;
        progress.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

        // 更新按钮状态
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.disabled = userAnswers[currentQuestion] === null;

        // 显示已选答案
        optionBtns.forEach(btn => {
            btn.classList.remove('selected');
            if (userAnswers[currentQuestion] === btn.dataset.value) {
                btn.classList.add('selected');
            }
        });
    }

    // 处理答案选择
    function handleAnswer(answer) {
        userAnswers[currentQuestion] = answer;
        
        // 更新当前问题的选中状态
        optionBtns.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.value === answer) {
                btn.classList.add('selected');
            }
        });

        // 更新答案统计
        const question = questions[currentQuestion];
        if (answer === 'A') {
            answers[question.dimension[0]]++;
        } else {
            answers[question.dimension[1]]++;
        }

        nextBtn.disabled = false;
    }

    // 计算并显示结果
    function calculateResult() {
        questionArea.style.display = 'none';
        resultContainer.style.display = 'block';
        
        const type = [
            answers.E > answers.I ? 'E' : 'I',
            answers.S > answers.N ? 'S' : 'N',
            answers.T > answers.F ? 'T' : 'F',
            answers.J > answers.P ? 'J' : 'P'
        ].join('');
        
        document.querySelector('.mbti-result').textContent = type;
        
        // 更新得分条
        updateScoreBar('E', 'I');
        updateScoreBar('S', 'N');
        updateScoreBar('T', 'F');
        updateScoreBar('J', 'P');
    }

    // 更新得分条
    function updateScoreBar(dim1, dim2) {
        const total = answers[dim1] + answers[dim2];
        const percentage = (answers[dim1] / total) * 100;
        const scoreBar = document.querySelector(`.dimension-score:has(.dimension:contains('${dim1}')) .score-fill`);
        scoreBar.style.width = `${percentage}%`;
    }

    // 添加导航按钮事件监听
    prevBtn.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else if (userAnswers[currentQuestion] !== null) {
            // 如果是最后一题且已回答，显示结果
            calculateResult();
        }
    });

    // 选项按钮点击事件
    optionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            handleAnswer(btn.dataset.value);
            // 自动进入下一题或显示结果
            if (currentQuestion < questions.length - 1) {
                setTimeout(() => {
                    currentQuestion++;
                    showQuestion();
                }, 300);
            } else {
                // 如果是最后一题，显示结果
                setTimeout(() => {
                    calculateResult();
                }, 300);
            }
        });
    });

    // 开始显示第一个问题
    showQuestion();
}); 