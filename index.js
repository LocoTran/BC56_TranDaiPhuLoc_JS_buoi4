/** Nhập 3 số nguyên, xuất 3 số theo thứ tự tăng dần */

function sapxep() {
  console.log("yes");
  var sothu1 = document.getElementById("so-thu-1").value * 1;
  var sothu2 = document.getElementById("so-thu-2").value * 1;
  var sothu3 = document.getElementById("so-thu-3").value * 1;

  var solonnhat;
  var sonhonhat;
  var sotb;

  if (sothu1 > sothu2 && sothu1 > sothu3) {
    solonnhat = sothu1;
    if (sothu2 > sothu3) {
      sotb = sothu2;
      sonhonhat = sothu3;
    } else {
      sotb = sothu3;
      sonhonhat = sothu2;
    }
  } else if (sothu2 > sothu1 && sothu2 > sothu3) {
    solonnhat = sothu2;
    if (sothu1 > sothu3) {
      sotb = sothu1;
      sonhonhat = sothu3;
    } else {
      sotb = sothu3;
      sonhonhat = sothu1;
    }
  } else {
    solonnhat = sothu3;
    if (sothu2 > sothu1) {
      sotb = sothu2;
      sonhonhat = sothu1;
    } else {
      sotb = sothu1;
      sonhonhat = sothu2;
    }
  }

  document.getElementById("kqsapxep").innerHTML = `
    <h3>Số nhỏ nhất: ${sonhonhat}</h3>
    <h3>Số trung bình: ${sotb}</h3>
    <h3>Số lớn nhất: ${solonnhat}</h3>`;
}

/** Bài 2 Hỏi ai trong các thành viên của gia đình đang sử dụng máy xong chào hỏi họ */

function chao() {
  var nguoisudung = document.getElementById("nguoi-su-dung").value;

  switch (nguoisudung) {
    case "E": {
      document.getElementById("kqchao").innerHTML = `
            <h3>Chào Em gái, hôm nay đi học có vui không?</h3>`;
      break;
    }
    case "M": {
      document.getElementById("kqchao").innerHTML = `
            <h3>Chào Mẹ, hôm nay Mẹ nấu món gì ăn thế?</h3>`;
      break;
    }
    case "A": {
      document.getElementById("kqchao").innerHTML = `
            <h3>Chào Anh Trai, hôm nay có đi đá bóng không?</h3>`;
      break;
    }
    default: {
      document.getElementById("kqchao").innerHTML = `
            <h3>Chào Bố, hôm nay có đi nhậu không?</h3>`;
      break;
    }
  }
}

/**Bài 3 Trong 3 số nguyên có bao nhiêu số chẵn và bao nhiêu số lẻ */

function phanloai() {
  var soDau = document.getElementById("so-dau").value * 1;
  var soGiua = document.getElementById("so-giua").value * 1;
  var soCuoi = document.getElementById("so-cuoi").value * 1;

  if (soDau % 2 == 0 && soGiua % 2 == 0 && soCuoi % 2 == 0) {
    document.getElementById("kqphanloai").innerHTML = `
        <h3>Cả 3 đều là số chẵn</h3>`;
  } else if (soDau % 2 == 1 && soGiua % 2 == 1 && soCuoi % 2 == 1) {
    document.getElementById("kqphanloai").innerHTML = `
        <h3>Cả 3 đều là số lẻ</h3>`;
  } else if ((soDau + soGiua + soCuoi) % 2 == 0) {
    document.getElementById("kqphanloai").innerHTML = `
        <h3>Có 1 số chẵn và 2 số lẻ</h3>`;
  } else {
    document.getElementById("kqphanloai").innerHTML = `
        <h3>Có 1 số lẻ và 2 số chẵn</h3>`;
  }
}

/** Bài 4 Nhập 3 cạnh tam giác và cho biết đó là tam giác gì */

function tamgiac() {
  var canhdainhat = document.getElementById("canh-1").value * 1;
  var canhthu2 = document.getElementById("canh-2").value * 1;
  var canhthu3 = document.getElementById("canh-3").value * 1;

  if (canhdainhat ** 2 == canhthu2 ** 2 + canhthu3 ** 2) {
    document.getElementById("kqtamgiac").innerHTML = `
        <h3>Đây là tam giác vuông</h3>`;
  } else if (canhdainhat == canhthu2 && canhdainhat == canhthu3) {
    document.getElementById("kqtamgiac").innerHTML = `
        <h3>Đây là tam giác đều</h3>`;
  } else if (
    canhdainhat == canhthu2 ||
    canhdainhat == canhthu3 ||
    canhthu2 == canhthu3
  ) {
    document.getElementById("kqtamgiac").innerHTML = `
        <h3>Đây là tam giác cân</h3>`;
  } else if (
    canhdainhat + canhthu2 <= canhthu3 ||
    canhthu3 + canhthu2 <= canhdainhat ||
    canhdainhat + canhthu3 <= canhthu2
  ) {
    document.getElementById("kqtamgiac").innerHTML = `
        <h3>Đây không phải là 1 tam giác</h3>`;
  } else {
    document.getElementById("kqtamgiac").innerHTML = `
        <h3>Đây là tam giác thường</h3>`;
  }
}
