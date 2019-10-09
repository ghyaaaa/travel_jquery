//功能一 新闻的分页显示
const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/list", (req, res) => {
    var pno = req.query.pno; //当前页面
    var pageSize = req.query.pageSize; //页大小
    //2.设置参数默认值
    if (!pno) {
        pno = 1;
    };
    if (!pageSize) {
        pageSize = 10;
    };
    //3.验证用户输入
    var reg = /^[0-9]{1,}$/;
    if (!reg.test(pno)) {
        res.send({
            code: -1,
            msg: "页面格式不正确"
        });
        return;
    };
    if (!reg.test(pageSize)) {
        res.send({
            code: -2,
            msg: "页大小格式不正确"
        });
        return;
    }
    //4.创建两条sql发送 总记录数  
    //4.1创建空对象保存返回数据
    var obj = {
        pno,
        pageSize
    };
    //4.2创建变量保存(sql语句完成)进度
    var progress = 0;
    var sql = "SELECT count(id) as c FROM qy_news";
    pool.query(sql, [], (err, result) => {
        if (err) throw err;
        // console.log(result);
        var pageCount = Math.ceil(result[0].c / pageSize);
        obj.pageCount = pageCount;
        progress += 50; //记录当前进度
        if (progress == 100) { //如果完成
            res.send({
                code: 1,
                msg: obj
            }) //发送结果
        }
    });
    //5.当前页的内容
    var sql = "SELECT id,title,ctime,click,img_url";
    sql += " FROM qy_news ";
    sql += " LIMIT ?,? ";
    var offset = (pno - 1) * pageSize;
    pageSize = parseInt(pageSize);
    pool.query(sql, [offset, pageSize], (err, result) => {
        if (err) throw err;
        obj.data = result;
        progress += 50;
        if (progress == 100) {
            res.send({
                code: 1,
                msg: obj
            })
        }


    })
    //6.将数据json发送
});

//功能二  依据用户的id查找新闻的详细信息
router.get("/find", (req, res) => {
    //1.参数 id
    var id = req.query.id;
    //1.1偷懒操作所有参数过滤 正则表达式
    //2.sql
    var sql = "SELECT `id`, `title`, `content`, `click`, `img_url`, `price`, `ctime` FROM `qy_news` WHERE id=?"
    //3.json
    pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send({
            code: 1,
            msg: [result]
        })

    })
})
// router.get("/login",(req,res)=>{
//     //node.js 优点占位符大大提升sql安全级别
//     //网络攻击手段:
//     //--SQL注入:利用sql语句规则将危险字符串添sql
//     //--DDOS:发送大量垃圾数据
//     //--渗透
//     //1:参数id
//     //2:sql
//     var uname = "' or 1=1;select into ";
//     var upwd = ""
//     var sql = " SELECT count(uid) as c FROM xz_user"
//     sql+= " WHERE uname = '"+uname+"'"
//     sql+= " AND upwd = md5('"+upwd+"')";
//     console.log(sql);
//     pool.query(sql,(err,result)=>{
//         if(err)throw err;
//         var rs = result[0].c;
//         if(rs < 1){
//             res.send("登录失败");
//         }else{
//             res.send("登录成功");
//         }
//     })
//     //3:json
// });
//功能三:分页显示评论列表
router.get("/commentlist", (req, res) => {
    //1.参数 pno pageSize nid
    var pno = req.query.pno;
    var pageSize = req.query.pageSize;
    var nid = parseInt(req.query.nid);
    if (!pno) {
        pno = 1;
    };
    if (!pageSize) {
        pageSize = 8;
    };
    var reg = /^[0-9]+$/;
    if (!reg.test(pno)) {
        res.send({
            code: -1,
            msg: "页面格式不正确"
        });
        return;
    };
    if (!reg.test(pageSize)) {
        res.send({
            code: -2,
            msg: "页大小格式不正确"
        });
        return;
    }
    //2.sql   -总记录数  -当前页内容
    var obj = {
        pno,
        pageSize
    };
    var progress = 0;
    var sql = "SELECT count(id) as c FROM news_comment WHERE nid=?";
    pool.query(sql, [nid], (err, result) => {
        if (err) throw err;
        obj.pageCount = Math.ceil(result[0].c / pageSize); //每页的内容多少
        progress += 50;
        if (progress == 100) {
            res.send(obj)
        }
    })
    pageSize = parseInt(pageSize);
    var offset = parseInt((pno - 1) * pageSize);
    var sql = "SELECT `id`, `nid`, `ctime`, `content`, `username`, `isdel` FROM `news_comment` WHERE nid=? ORDER BY id DESC LIMIT ?,?  ";
    pool.query(sql, [nid, offset, pageSize], (err, result) => {
        if (err) throw err;
        obj.data = result;
        progress += 50;
        if (progress == 100) {
            res.send(obj)
        }
    })

    //3.json
    // res.send({code:1,msg:[],pno:2,pageCount:2,pageSize:5});
});

//功能四:添加一条评论
//获取 查询 需要数据 SELECT
//添加 保存 插入数据 INSERT
//更新 修改           UPDATE
router.post("/saveComment", (req, res) => {
    //1.参数  nid username content  content不能为空 长度大于2
    var nid = parseInt(req.body.nid);
    var username = req.body.username;
    var content = req.body.content;
    // console.log(content)
    var reg = /^[操日妈傻b逼瓜娃麻|(cao)]|[卖买麦]|[批|皮]$/;
    if (reg.test(content)) {
        res.send({
            code: -2,
            msg: "亲,不要骂人哦,请文明用语哦"
        });
        return;
    }
    if (content.length < 2) {
        res.send({
            code: -1,
            msg: "亲,你评论的内容太少了,至少输入两个字哦.."
        });
        return;
    }
    //2.sql
    var sql = "INSERT INTO `news_comment`(`id`, `nid`, `ctime`, `content`, `username`, `isdel`) VALUES (null,?,now(),?,?,0)";
    pool.query(sql, [nid, content, username], (err, result) => {
        if (err) throw err;
        console.log(result);
        //INSERT:UPDATE;DELETE
        //执行成功条件,影响行数
        if (result.affectedRows == 1) {
            res.send({
                code: 1,
                msg: "添加成功"
            })
        } else {
            res.send({
                code: -1,
                msg: "添加失败"
            })
        }
    })

    //3.返回数据
});

//功能五:删除一条评论
router.get("/delComment", (req, res) => {
    var id = req.query.id;
    var sql = "DELETE FROM `news_comment` WHERE id=?";
    pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        if (result.affectedRows == 1) {
            res.send({
                code: 1,
                msg: "删除成功"
            })
        } else {
            res.send({
                code: -1,
                msg: "删除失败,请检查一下再试试吧"
            })
        }
    })
})
module.exports = router;