const nodemailer = require("nodemailer");



const sendMail = async (req, res) => {
  try {
    const { name, secondName, tel, email, address, delivery, order } = req.body;
    const transporter = nodemailer.createTransport({
      port: 587, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        user: "noguchi.ramen.shop@gmail.com",
        pass: "xxlq rlps agyz jrqz",
      },
      secure: false,
        // service: "gmail",
    });
   
    let orderStr = '';
    order.forEach(el => {
      orderStr += `<b>${el.title}<b> - кількість: <b>${el.count}</b> - <b>${el.price}</b> грн <br>`
    })
    const mailOptions = {
      from: "Noguchi <noguchi.ramen.shop@gmail.com>",
      to: "pavel470245@gmail.com",
      subject: "Noguchi Checkout Form request",


      html: `Name: ${name} <br> Second Name: ${secondName} <br> Phone: ${tel} <br> Email: ${email} <br> Address: ${address} <br> Delivery: ${delivery} <br> <b> Інформація про замовлення:</b> <br> ${orderStr}`,
      //text: `Mail sending`,
    };

  await new Promise((resolve, reject) => {
     transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.json({ message: "Почта успешно отправлена!", status: 200 });
      } 
    });
  });


    return res.json({ message: "Почта успешно отправлена!", status: 200 });
  } catch (e) {
    res.json({ message: "Ошибка связи!" });
  }
};



const sendMailPartner = async (req, res) => {
  try {
    const { name, phone, product } = req.body;
    const transporter = nodemailer.createTransport({
      port: 587, // true for 465, false for other ports
      host: "smtp.gmail.com",
      auth: {
        // user: "pavel470245@gmail.com",
        // pass: "tkpizlqqrtlpfbwb",
        user: "noguchi.ramen.shop@gmail.com",
        pass: "xxlq rlps agyz jrqz",
      },
      secure: false,
        // service: "gmail",
    });

    const mailOptions = {
      from: "Noguchi <noguchi.ramen.shop@gmail.com>",
      to: "pavel470245@gmail.com, noguchi.ramen.shop@gmail.com",
      subject: "Cef Lab Form request",
      html: `Name: ${name} <br> Phone: ${phone} <br> Product: ${product} `,
      //text: `Mail sending`,
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      } 
    });

    return res.json({ message: "Почта успешно отправлена!", status: 200 });
  } catch (e) {
    res.json({ message: "Ошибка связи!" });
  }
};

module.exports = {
  sendMail,
  sendMailPartner
};
