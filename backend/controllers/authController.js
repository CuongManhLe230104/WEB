// Controller xử lý đăng nhập
const login = (req, res) => {
    const { username, password } = req.body;

    // Kiểm tra username và password
    if (username === 'admin' && password === 'admin') {
        return res.status(200).json({
            success: true,
            message: 'Đăng nhập thành công',
            user: {
                username: username
            }
        });
    } else {
        return res.status(401).json({
            success: false,
            message: 'Tên đăng nhập hoặc mật khẩu không đúng'
        });
    }
};

module.exports = {
    login
};
