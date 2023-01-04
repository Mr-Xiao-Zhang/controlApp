interface IProps {
  color?: string;
}

export default function MobildeIcon(props: IProps) {
  const { color } = props;

  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>icon/设备型号</title>
      <g
        id="管控界面"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="01-1-首页-默认" transform="translate(-224.000000, -259.000000)">
          <g id="头像区" transform="translate(16.000000, 177.000000)">
            <g id="icon/设备型号" transform="translate(208.000000, 82.000000)">
              <rect
                id="矩形"
                fill={color || '#666666'}
                opacity="0"
                x="0"
                y="0"
                width="16"
                height="16"
              ></rect>
              <g id="编组" transform="translate(3.000000, 1.500000)">
                <rect
                  id="矩形"
                  stroke={color || '#666666'}
                  x="0"
                  y="0"
                  width="10"
                  height="13"
                  rx="1"
                ></rect>
                <circle
                  id="椭圆形"
                  fill={color || '#666666'}
                  cx="5"
                  cy="10.7925625"
                  r="1"
                ></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
