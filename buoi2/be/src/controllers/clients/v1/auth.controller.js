// tách file => để dễ quản lý
// đẩy file ra để file khác có thể import chúng vào
// reactjs => exports {}, exports default ten-file
module.exports = {
    login: (req, res) => {
        // muoosn req no se tra ra user
        const user = req.user;
        console.log("dang trong login: " ,{...user, password: "khong tiet lo"});
        return res.json({
            message: "Login thanh cong"
        })
    },
};
