let mat = Float32Array;

export default function (quat, pos, dst = new mat(12)) {

    const qx = quat[0];
    const qy = quat[1];
    const qz = quat[2];
    const qw = quat[3];

    const xx = 2 * qx * qx;
    const yy = 2 * qy * qy;
    const zz = 2 * qz * qz;

    const xy = 2 * qx * qy;
    const zw = 2 * qz * qw;
    const xz = 2 * qx * qz;

    const yw = 2 * qy * qw;
    const yz = 2 * qy * qz;
    const xw = 2 * qx * qw;

    dst[0] =  1 - yy - zz;
    dst[1] =  xy - zw;
    dst[2] =  xz + yw;

    dst[3] =  xy + zw;
    dst[4] =  1 - xx - zz;
    dst[5] =  yz - xw;

    dst[6] =  xz - yw;
    dst[7] =  yz + xw;
    dst[8] =  1 - xx - yy;

    dst[9]  = pos[0];
    dst[10] = pos[1];
    dst[11] = pos[2];

    return dst;

}
