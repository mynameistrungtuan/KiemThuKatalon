import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Input, Button, Modal } from "semantic-ui-react";
import "./login.scss";
import { useHistory } from "react-router-dom";


const account = { username: "admin", password: "123456" };

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (e, field) => {
    if (field === "username") {
      setUsername(e.target.value);
    }
    if (field === "password") {
      setPassword(e.target.value);
    }
  };
  const onLogin = () => {
    console.log(username, password);
    if (username === account.username && password === account.password) {
      setMessage("Đăng nhập thành công!!!");
      setOpenDialog(true);
      history.push("/");
    } else {
      setMessage("Sai tên đắng nhập hoặc mật khẩu!!!");
      setOpenDialog(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <div className="login-form">
          <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
            {" "}
            Đăng nhập{" "}
          </h1>
          <div className="login-content">
            <label>Tên đăng nhập</label>
            <br />
            <Input
              placeholder="Username"
              className="inputText"
              value={username}
              onChange={(e) => handleChange(e, "username")}
            />
            <br />
            <label style={{ marginTop: "10px" }}>Mật khẩu</label>
            <br />
            <Input
              placeholder="Password"
              type="password"
              className="inputText"
              value={password}
              onChange={(e) => handleChange(e, "password")}
            />
            <br />
            <Button color="green" onClick={(onLogin)}>
              {" "}
              Đăng nhập{" "}
            </Button>
            <p style={{ marginTop: "20px", textAlign: "center" }}>
              Bạn chưa có tài khoản?{" "}
              <a className="register-text">Đăng ký ngay.</a>
            </p>
            <div className="logo-contact">
              <Button circular color="facebook" icon="facebook" />
              <Button circular color="twitter" icon="twitter" />
              <Button circular color="linkedin" icon="linkedin" />
              <Button circular color="google plus" icon="google plus" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        onClose={() => setOpenDialog(false)}
        onOpen={() => setOpenDialog(true)}
        open={openDialog}
        size="mini"
      >
        <Modal.Header>
          <h4 className="txt-check">Thông báo</h4>
        </Modal.Header>
        <Modal.Content image>
          <p>{message}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpenDialog(false)}>Đóng</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Login;
