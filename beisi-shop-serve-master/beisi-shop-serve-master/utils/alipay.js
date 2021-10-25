const AlipaySdk = require('alipay-sdk').default; // 引入 SDK
const AlipayFormData = require("alipay-sdk/lib/form").default
const formData = new AlipayFormData();
formData.addField('notifyUrl', 'http://localhost:8081/paySuccess')
formData.setMethod('get');
const payOrder =async function ({outTradeNo,totalAmount,subject,body}) {
    formData.addField('bizContent', {
        outTradeNo, // 商户订单号,64个字符以内、可包含字母、数字、下划线,且不能重复
        productCode: 'FAST_INSTANT_TRADE_PAY', // 销售产品码，与支付宝签约的产品码名称,仅支持FAST_INSTANT_TRADE_PAY
        totalAmount, // 订单总金额，单位为元，精确到小数点后两位
        subject, // 订单标题
        body, // 订单描述

    });
    formData.addField('returnUrl', 'http:///localhost:8081/paySuccess');//加在这里才有效果,不是加在
    const alipaySdk = new AlipaySdk({
        appId: '2021000118617100', // 开放平台上创建应用时生成的 appId
        signType: 'RSA2', // 签名算法,默认 RSA2
        charset: "utf-8", 
        gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝网关地址 ，沙箱环境下使用时需要修改
        alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoBzW4u1hXww2qcOMWxWs76l/gBSrHEP5btazdJBJrU7uWBOSu71S+aJb2jpxCgjzP1AqjIwP1LhLdHRkzvW/w7Ue/qQeBOD5iyTMTRhdnOXbQs1DKzDVDaXcjOgEJ/Q2fESqci+51E3hMmaiV7hi0OWODxZfWAWxlqaoZ8yEiWw3K9GrATfqG/ze9nxmVeDxZmBxCivML7rFzCZAoUD3n5D5usX1qmKTygMjBThzdLv9+/tIiFA7ZSii5rbaTcWwSEceTfPrhxP8QJp9Ukzf39J3sv63Yk3FKK2tyfC0XLO2+/li9R+nP+jXzI13Nb/1bwMtTCKXSJUd9PASBmPkEwIDAQAB', // 支付宝公钥，需要对结果验签时候必填
        privateKey: 'MIIEowIBAAKCAQEAhGXyGrOgZ5wSZi09M3gvztdwA4zrcHO7UaXVa6on/a57sk1kjo9mV238DD4KGyNmCtCIrDO/9PX4uVBcTlIOc4yioR5pToTnFPfZ7Ud9v+z2kFDQ7Fbo1BWDLStUnWpRKaqyd+tppySpa811QJkBXdK0wl5i+b5BS8BrJSv5HwOKqfIhXn7Xp2lx/jJEnJMVPXirIo6E45+V7z2yoZBJK9Xzayd+znJhB/1TDq073+31JUKAMF1A2Q9srUWFI/F1X4MQLKt7YvG+TBESwXA5IsCCEIjHnqJwU2CD3HjeSUUnYNz0tOzfigIE3inbgiYBQmkykpQJVaZtN5lbj5GruQIDAQABAoIBADwQk/mRLGBU6fP46h8Dk4zfKC40LEvj9UNhXKVvmJz6H5wQiGI0pFVdzE8xhhwxvwWA/cBB6gAT5zcLQhU2HOBHGTDHPzckDEHy/6cqG96KfoGSaHYQJ6iv6ccANW8E4LVqf3TwFAqEE2iY2Wzo/Tm3cdIMSBLNQYpATVuby3VJ2mc5oxOQYieabqO/maiZrv3wwLbI4HMqioZeVKQ3ODRG4QA4ZomM6FdgCk0skTmSlL81lYSSREIee0zF3/wOlnF42p+n6skHvVFv9Tg3hxDGmFjIhONHUzTcECzJCfHHcImXyXIrrwAK9/1k9rR2+ZShvBq8nDIxemcI1sYPy0ECgYEAyEdl6NvzUV4IEDPoLMJYECV2+e8ivekLFAinyyqcWYTfptC41HjD54R8ULXTHxdFMHHhNNK3CJGhqDMvOjMqaXIEFLxyOvTY7uEIzDes/G62BLy8p8gH+bsmvJi7Vb9Pu2CurlFGrEn6x+YLuZ6xfkWU2XCfbsWnNCQqeiX4d40CgYEAqTvV8GohiOd+dx/1mOa0L9aa91x2A0jfijFz9C+XoXDlyn4tuGd+CMkswIUVgKTyEsNXMml25AhycHJ//FRb2Dszc8VXBaphofrzRzDl/ojfQaV75Zms5vlbCht355JigtOCCzPnfYHcznq1tNYCOANPbxoYxqhDcglzpvm/E90CgYAEXSnnTQOcPkRGthrU/tcUYvyYrZFAOhe3tAiT8LW/bZnB9MJSPt9l6AkdaRjUkJk9WP3jPMQoN6QiGhtpVTwTWBympwSGLFedvOGIMZ5fUbo9mC80KLOjyWQqr9lFIQoHty+XNMYpcuM3/9c5kC+l5LY9lqqiq0PdavxR9QnY8QKBgDlOObOfPJvPR9Ouzstn07wfP3pjpNKX6poxBMK7Gu1f/XAEKhc3dEYlWTIX3qAhOpd/7hbz/35YHehV3WDkb/VYlqOtPzp753OiNp70v+zhDDh+gOXOk+3ioiFaC9AukY0bcf25JboqL0r74mvJzBaLiGpmu90JPU1wRelUyI9BAoGBAMHeGMK9FNcAWxpy/j0qrGsOkOifY0aBqR1S7JylLwmPDO/RvJ/HbyL+NBWU5Z7DLrE5qSYQZwMziooPrKDRE6C1eKsHssG8ntxqlVWgitYC407Yz8aAhU/APeGyUGBq8vPrco7aeRRo8RZZ41SLcZRnJgfJE/ZOBmgxV9YSbNK8', // 应用私钥字符串
    });
    const result = alipaySdk.exec(  // result 为可以跳转到支付链接的 url
        'alipay.trade.page.pay', // 统一收单下单并支付页面接口
        {}, // api 请求的参数（包含“公共请求参数”和“业务参数”）
        { formData: formData },
    );
    return result
}
module.exports={
    payOrder
}
//正式环境只要把上述换成正式的就可以了