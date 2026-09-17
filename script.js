function getAnswers() {
    const answers = [];
    for (let i = 1; i <= 10; i++) {
        const selected = document.querySelector(
            `input[name="mbti_test_content${i}_button"]:checked`
        );
        if (!selected) {
            const firstRadio = document.querySelector(`input[name="mbti_test_content${i}_button"]`);
            firstRadio.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            return;
        }
        answers.push(selected.value);
    }
    let result = "";
    const E = countValue(answers, "E");
    const I = countValue(answers, "I");
    const S = countValue(answers, "S");
    const N = countValue(answers, "N");
    const T = countValue(answers, "T");
    const F = countValue(answers, "F");
    const J = countValue(answers, "J");
    const P = countValue(answers, "P");
    if (E > I) {
        result += "E";
    } else {
        result += "I";
    }
    if (S > N) {
        result += "S";
    } else {
        result += "N";
    }
    if (T > F) {
        result += "T";
    } else {
        result += "F";
    }
    if (J > P) {
        result += "J";
    } else {
        result += "P";
    }
    console.log(result);
    localStorage.setItem("result", result);
    location.href = "result.html";
}

function countValue(answers, value) {
    return answers.filter(answer => answer === value).length;
}