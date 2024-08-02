import {Modal, Toast} from "antd-mobile";
import {sleep} from "../../utils/sleep";

export const handleAlertFirstButton = (): void => {
  Modal.alert({
    content: '人在天边月上明',
    onConfirm: () => {
      console.log('Confirmed');
    },
  });
};
export const handleAlertSecondButton = (): void => {
  Modal.alert({
    content: '点击遮罩关闭',
    closeOnMaskClick: true,
  })
};
export const handleAlertThirdButton = (): void => {
  Modal.alert({
    title: '带关闭图标的弹窗',
    content: '右上角有个关闭的小图标，点击它也可以关闭弹窗',
    showCloseButton: true,
  })
};
export const handleAlertFourthButton = ():void => {
  Modal.show({
    content: '人在天边月上明，风初紧，吹入画帘旌',
    closeOnAction: true,
    actions: [
      {
        key: 'online',
        text: '在线阅读',
        primary: true,
      },
      {
        key: 'download',
        text: '下载文件',
      },
      {
        key: 'share',
        text: '分享',
      },
    ],
  })
}
export const handleAlertFifthButton = ():void => {
  Modal.confirm({
    content: '是否提交申请',
    onConfirm: async () => {
      await sleep(3000)
      Toast.show({
        icon: 'success',
        content: '提交成功',
        position: 'bottom',
      })
    },
  })

}
export const handleAlertSixthButton = ():void => {
  Modal.confirm({
    content: '是否提交申请',
    onConfirm: async () => {
      await sleep(3000)
      Toast.show({
        icon: 'fail',
        content: '提交失败',
        position: 'bottom',
      })
      throw new Error()
    },
  })
}