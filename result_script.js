const result = localStorage.getItem("result");

document.getElementById("result").textContent = "あなたの音楽タイプは\n" + result + "";
showQRCode(result);

function showQRCode(result) {
    const youtubeLinks = {
        "INTJ": "https://www.youtube.com/playlist?list=PLOGIPA0sq3vo",
        "INTP": "https://www.youtube.com/playlist?list=PLSG6vR0pTWcs",
        "ENTJ": "https://www.youtube.com/playlist?list=PLDGf_2xh2QlU",
        "ENTP": "https://www.youtube.com/playlist?list=PLA-pCWtqzEOg",
        "INFJ": "https://www.youtube.com/playlist?list=PLaDaSedr4C-k",
        "INFP": "https://www.youtube.com/playlist?list=PLWV8PK_Cr-tE",
        "ENFJ": "https://www.youtube.com/playlist?list=PLdktOKnosN7Q",
        "ENFP": "https://www.youtube.com/playlist?list=PLEZb4gBa_4rM",
        "ISTJ": "https://www.youtube.com/watch?v=Egf6iPpBW0M&list=PLBupSyNLAGcw&pp=sAgC",
        "ISFJ": "https://www.youtube.com/watch?v=vCDCepKTQ-Q&list=PLE0rrOwSWWLU&pp=sAgC",
        "ESTJ": "https://www.youtube.com/watch?v=igg0iHG8MR4&list=PLQ49bcxDsSgI&pp=sAgC",
        "ESFJ": "https://www.youtube.com/watch?v=PCp2iXA1uLE&list=PLHmmL_tTzwus&pp=sAgC",
        "ISTP": "https://youtube.com/playlist?list=PLd9n1I8wGcJI&si=VqwYfyTsVsbm2gOn",
        "ISFP": "https://www.youtube.com/watch?v=l5MOVg9eMe4&list=PLU1BTTiZmFs0&pp=0gcJCbwFa94AFGB0sAgC",
        "ESTP": "https://www.youtube.com/watch?v=50aJ6AtNp0o&list=PLF56zT4_FQyY&pp=sAgC",
        "ESFP": "https://www.youtube.com/watch?v=Go_OV-ifSmI&list=PLAhifSPyWy6w&pp=sAgC"
    };

    const url = youtubeLinks[result];

    if (!url) {
        console.log("URLがありません");
        return;
    }

    // QRコードを作る
    new QRCode(document.getElementById("qrcode"), {
        text: url,
        width: 200,
        height: 200
    });
}

function back_to_first() {
    const result = window.confirm("結果が消えます！戻ってよろしいですか？")
    if (result) {
        location.href = "index.html";
    }else {
        console.log("cancel");
    }
}