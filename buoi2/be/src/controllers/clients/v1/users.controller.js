// tách file => để dễ quản lý
// đẩy file ra để file khác có thể import chúng vào
// reactjs => exports {}, exports default ten-file
module.exports = {
    getAllUsers: (req, res) => {
        res.json({
            message: "Client API đã tách",
        });
    },

    findUserById: (req, res) => {
        const id = req.params.id;
        console.log(id);
        res.json({
            userID: id,
            message: 'Find by id đã tách ra'
        });
    },
    create: (req, res) => {
        const body = req.body;
        const {id } = req.params;
        console.log(id);
        res.json({
            data: body,
            userId: id,
            message: "POST request",
        });
    }

};
