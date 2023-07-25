let ball = prompt("Ball: "); 

if (ball >= 0 && ball < 80) {
  console.log("O'qishga kira olmadingiz");
} else if (ball >= 80 && ball < 100) {
    let money = prompt("Siz super-kontrakt asosida o'qishga tavsiya qilindingiz. Kontrakt miqdori yiliga 3000$. Qancha pulingiz bor?");
    if (money>=3000){
        console.log("O'qishga qabul qilindizgiz")
    }
    else{
        console.log("O'qish uchun mablagingiz yetarli emas")
    }
} else if (ball >= 100 && ball < 130) {
    let money = prompt("Siz kontrakt asosida qabul qilindizngiz. Kontrakt miqdori yiliga 2000$. Qancha pulingiz bor?");
    if (money>=3000){
        console.log("O'qishga qabul qilindizgiz")
    }
    else{
        console.log("O'qish uchun mablagingiz yetarli emas")
    }
} else if (ball >= 130 && ball <= 180) {
  console.log("Siz grant asosida o'qishga qabul qilindingiz!");
} else {
  console.log("Noto'g'ri qiymat kiritildi");
}