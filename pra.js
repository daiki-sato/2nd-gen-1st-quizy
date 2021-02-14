// こっちが本当


 // 配列
 
 
 // quizeSet.forEach(element => {
   
   //  let quizeSet_answer = quizeSet[0];
   
   //  console.log(quizeSet_answer);
   // });
   
   // for (let i = 0; i < 10; i++) {
     
     
     // let hash = [
       
       //   ["value0"], 
       //   ["value1"]
       
       // ];
       
       
       
       
       
       // function aaa(num) {
         //   let gh = 1  + num ;
         //   console.log(gh); 
         // }
         // aaa(34);
         
         
         
         
         
         // console.log(quizeSet);
         // const correct = [
           
           //   quizeSet[0][0],quizeSet[1][0],quizeSet[2][0],quizeSet[3][0],quizeSet[4][0],
           //   quizeSet[5][0],quizeSet[6][0],quizeSet[7][0],quizeSet[8][0],quizeSet[9][0], 
           // ];
           
           // question_num　：問題番号
           // selection_num　：選択された番号
           // answer_num：　答えの番号
           
          //  Object.keys(quizeSet).forEach(key => {
          // });         
          






          
    
  'use strict';

  // 配列
  let quizeSet = new Array();

  quizeSet.push(["たかなわ", "こうわ", "たかわ"]);
  quizeSet.push(["かめいど", "かめど", "かめと"]);
  quizeSet.push(["こうじまち", "おかとまち", "かゆまち"]);
  quizeSet.push(["ごせいもん", "おなりもん", "おかどもん"]);
  quizeSet.push(["とどろき", "たたりき", "たたら"]);
  quizeSet.push(["せきこうい", "いじい", "しゃくじい"]);
  quizeSet.push(["ざっしょく", "ざっしき", "ぞうしき"]);
  quizeSet.push(["みとちょう", "おかちまち", "ごしろちょう"]);
  quizeSet.push(["ろっこつ", "ししぼね", "しこね"]);
  quizeSet.push(["こぐれ", "こばく", "こしゃく"]);
  
  
  //正解
  // function answer(num) {
    let quizeSet_answer = new Array();
    
    quizeSet_answer.push("たかなわ");
    quizeSet_answer.push("こぐれ");
    quizeSet_answer.push("こうじまち");
    quizeSet_answer.push("ごせいもん");
    quizeSet_answer.push("とどろき");
  

      // ループさせてhtmlを10回表示させる
    for (let i = 0; i < 10; i++) {
      createdocument(i,0,0);
    }




     
// htmlに出力
function createdocument(question_num , selection_num , answer_num) {
  
  let h = 
    '<div id="body">'
      + '<div class="container" id="container">'
          + '<div class="box" id="box">'
              + '<p class="title" id="title">'
              +  (question_num + 1) +  '.この地名はなんて読む？'
              + '</p>'
              + '<img class="img-fluid" src="./img/' + question_num   +  '.png" alt="選択肢の写真">'
          + '</div>'

          + '<div class="btn" id="btn">'
            + '<ul id="ul">'

              + '<li class="list" id="' + question_num + "_" + selection_num + "_" + answer_num + "_" + 0 + '" onclick="check(0,0,0)">'
              + quizeSet[question_num][0]
              + '</li>'

              + '<li class="list" id="' + question_num + "_" + selection_num + "_" + answer_num + "_" + 1 + '" onclick="check(0,1,0)">'
              + quizeSet[question_num][1]
              + '</li>'

              + '<li class="list" id="' + question_num + "_" + selection_num + "_" + answer_num + "_"+ 2 + '" onclick="check(0,2,0)">'
              + quizeSet[question_num][2]
              + '</li>'

              + '<div id="target">'
                + '<p id="success"></p>'
                + '<p id="successText"></p>'
              + '</div>'
            + '</ul>'
          + '</div>'
      + '</div>'
    + '</div>';

    document.write(h);
  }


  // function:クリックしたときの動作
  function check(question_num,selection_num,answer_num) {
    
    // liのタグを取得：HTMLcollectionを返り値として返す。
    let lis = document.getElementsByTagName("li");
    
    // htmlcollectionの中のitem()番目の中の、テキスト（textcontent）を取得
    let li = lis.item(0).textContent;
  
    
    // id取得
    let qkotaaae = question_num + "_" + selection_num + "_" + answer_num + "_" + 0;
    // let answer = question_num_selection_num_answer_num_1; 
    // let answer = question_num_selection_num_answer_num_2; 
    
    console.log(qkotaaae);
    
    if (selection_num == answer_num ) {
      console.log("正解");
      
    }else {
      console.log("不正解");

    }
}


  
// if (quizeSet_answer[0].indexOf(li) > -1) {
  //   console.log("aaaaaaaaaaaa");
  
  // }else{
    //   console.log("不正解");
    // }
    
    // if ( li.match(/たかなわ/)) {
    //     //strにhogeを含む場合の処理
    //     console.log("マッチ");
    //   }else{
        
        
        // check();
        
        
        
        
          // let lis = document.getElementsByTagName("li");
          // let li = lis.item(0);
          // // let lii = document.getElementById("0_0_0");
          // console.log(li);
          
        // console.log(quizeSet_answer.toString());
        
        
        
        // let a = "たかなわ";
        // let b =   "たかなわ";
