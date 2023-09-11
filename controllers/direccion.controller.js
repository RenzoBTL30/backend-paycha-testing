import { pool } from "../database.js";


export const findByUsuario = async (req, res) => {

    const id = parseInt(req.params.id);

    try {
      pool.query(
        "SELECT CONVERT(d.id_direccion,char)AS id_direccion, d.direccion, CONVERT(l.id_lugar,char) AS id_lugar, l.lugar, l.comision, d.lat, d.lng, CONVERT(d.id_usuario,char)AS id_usuario FROM tb_direccion as d JOIN tb_lugar as l ON d.id_lugar = l.id_lugar WHERE d.id_usuario=?;",
        [id],
        function (err, result) {

          result.forEach((row) => {
            row.comision = parseFloat(row.comision);
          });
          
          try {
            return res.status(200).json(result);
          } catch (error) {
            return res.status(500).json("Error al listar categoria");
          }
        }
      );
    } catch (error) {
      return res.status(500).json("Error al listar categoria");
    }
};



export const listarDireccion = async (req, res) => {

  try {
    pool.query(
      "SELECT CONVERT(d.id_direccion,char)AS id_direccion, d.direccion, l.lugar FROM tb_direccion as d JOIN tb_lugar as l ON d.id_lugar = l.id_lugar;",
      function (err, result) {
        try {
          return res.status(200).json(result);
        } catch (error) {
          return res.status(500).json("Error al listar categoria");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al listar categoria");
  }
};

export const createDireccion = async (req, res) => {

    const P_direccion = req.body.direccion;
    const P_idLugar = req.body.id_lugar;
    const P_lat = req.body.lat;
    const P_lng = req.body.lng;
    const P_idUsuario = req.body.id_usuario;



    try {
      pool.query(
        "INSERT INTO tb_direccion (direccion, id_lugar, lat, lng, id_usuario) VALUES(?,?,?,?,?);",
        [P_direccion,P_idLugar,P_lat,P_lng,P_idUsuario],
        function (err, result) {
          try {
            return res.status(200).json({
              data: result.insertId,
              success: true,
            });
          } catch (error) {
            return res.status(500).json("Error al crear direccion");
          }
        }
      );
    } catch (error) {
      return res.status(500).json("Error al crear direccion");
    }
};

/*
export const editarDireccion = async (req, res) => {

  const id = parseInt(req.params.id);
  const P_nombre = req.body.nombre;

  try {
    pool.query(
      "UPDATE tb_categoria set nombre=? WHERE id_categoria=?",
      [P_nombre, id],
      function (err, result) {
        try {
          return res.status(200).json({
            success: true,
          });
        } catch (error) {
          return res.status(500).json("Error al crear categoria");
        }
      }
    );
  } catch (error) {
    return res.status(500).json("Error al crear categoria");
  }
};*/