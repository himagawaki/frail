//ボタンを押すごとに画面が切り替わる関数
  $(function () {
    $(".btn").on("click", function () {
      //btnクラスをクリック後の関数処理
      $(this).closest("div").css("display", "none");
      //質問画面にあたらる親要素divをdisplay:none;にする
      id = $(this).attr("href");
      //次の質問hrefをidに格納
      $(id).addClass("fit").fadeIn("slow").show();
      //次の質問にfitをつけて出力。
    })
  });
