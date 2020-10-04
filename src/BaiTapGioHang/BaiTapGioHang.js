/**
 * 1.dàn layout
 * 2.xat idnh data thay doi luu vao stATE
 * 3.LAY DATA TROng state di binding ra jsx
 * 4.render mang du lieu list key
 * 5.xay dung chuc nangxem chi tiet
 * 6. them gio hang
 * 7.xoa sản pham tai gi ohang
 * 8.tang giam so luong
 * 9.xay dung chuc nang hien thi tong so san pham
 */

import React, { Component } from "react";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      maSanPhan: "1",
      tenSanPham: "VS Phone",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    {
      maSanPhan: "2",
      tenSanPham: "Meziu phone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "10 MP",
      cameraSau: "Chính 12 MP & Phụ 8 MP, 5 MP",
      ram: "8 GB",
      rom: "16 GB",
    },
    {
      maSanPhan: "3",
      tenSanPham: "Apple phone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `AMOLED, 6.8", Full HD+`,
      heDieuHanh: "Android 10.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 50 MP & Phụ 8 MP, 5 MP",
      ram: "8 GB",
      rom: "8 GB",
    },
  ];
  state = {
    sanPhamChiTiet: {
      maSanPhan: "1",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
  };
  renderSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (0)
              </button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <img className="card-img-top" src="./img/vsphone.jpg" alt />
                    <div className="card-body">
                      <h4 className="card-title">VinSmart Live</h4>
                      <button className="btn btn-success">Chi tiết</button>
                      <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="./img/meizuphone.jpg"
                      alt
                    />
                    <div className="card-body">
                      <h4 className="card-title">Meizu 16Xs</h4>
                      <button className="btn btn-success">Chi tiết</button>
                      <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="./img/applephone.jpg"
                      alt
                    />
                    <div className="card-body">
                      <h4 className="card-title">Iphone XS Max</h4>
                      <button className="btn btn-success">Chi tiết</button>
                      <button className="btn btn-danger">Thêm giỏ hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="modelTitleId"
              aria-hidden="true"
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: 1000 }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Mã sản phẩm</th>
                          <th>tên sản phẩm</th>
                          <th>hình ảnh</th>
                          <th>số lượng</th>
                          <th>đơn giá</th>
                          <th>thành tiền</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
