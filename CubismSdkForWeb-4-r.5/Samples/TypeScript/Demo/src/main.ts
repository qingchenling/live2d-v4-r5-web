/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { resourcesConfig } from './lappdefine';
import { LAppDelegate } from './lappdelegate';
import { LAppLive2DManager } from './lapplive2dmanager';

/**
 * ブラウザロード後の処理
 */
function start() {
  // create the application instance
  if (LAppDelegate.getInstance().initialize() == false) return;
  LAppDelegate.getInstance().run();
}

/**
 * 更改模型位置
 * @param type all:全身 half: 上半身
 */
function changePos(type: string) {
  let manager = LAppLive2DManager.getInstance();

  resourcesConfig.setEyeStatus(type);
  for(let i=0; i < manager._models.getSize(); i++) {
    let model = manager.getModel(i);
    if(model) {
      let matrix = model.getModelMatrix();
      let h = model.getModel().getCanvasHeight();
  
      if(type == 'all') {
        matrix.setY(0);
        matrix.setHeight(2.0);
      }
      else {
        matrix.setY(-h*3/4);
        matrix.setHeight(4.5);
      }
      model.update();
    }
  }
}

/**
 * 終了時の処理
 */
window.onbeforeunload = (): void => LAppDelegate.releaseInstance();

/**
 * 根据index来控制切换模型，只能填整数
 * @param index 模型的次序从1开始。
 * 小于0: 随机加载
 * >0: 加载数组下标为index-1的模型
 * ==0 加载下一个模型
 */
function loadModel(index: number) {
  let manager = LAppLive2DManager.getInstance();
  if (index < 0) {
    manager.randomScene();
  } else if (index > 0 ) {
    manager.changeScene(index-1);
  } else if (index ==0) {
    manager.nextScene();
  }
}

module.exports = { loadModel, changePos, start, resourcesConfig }