/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

import { LogLevel } from '@framework/live2dcubismframework';

/**
 * Sample App 常量
 */

// 画面
export const ViewScale = 1.0;
export const ViewMaxScale = 2.0;
export const ViewMinScale = 0.8;

export const ViewLogicalLeft = -1.0;
export const ViewLogicalRight = 1.0;
export const ViewLogicalBottom = -1.0;
export const ViewLogicalTop = 1.0;

export const ViewLogicalMaxLeft = -2.0;
export const ViewLogicalMaxRight = 2.0;
export const ViewLogicalMaxBottom = -2.0;
export const ViewLogicalMaxTop = 2.0;

// 模型后面的背景图像文件
export const BackImageName = '';

export class ResourceConfig {
    private resourcesPath: string;
    private modelNames: string[];
    private modelSize: number;
    private canvasId: string = 'live2d';
    private eyeStatus: string = 'half'; // live2d 视角

    constructor() {
        this.resourcesPath = '../../Resources/';
        this.modelNames = ['Haru', 'Hiyori', 'Mark', 'Natori', 'Rice'];
        this.modelSize = this.modelNames.length;
    }
    
    public setModelNames(models:string[]) {
        this.modelNames = models;
        this.setModelSize();
    }
    
    public setResourcesPath(path:string) { this.resourcesPath = path; }
    public setModelSize() { this.modelSize = this.modelNames.length; }
    public setEyeStatus(status: string) { this.eyeStatus = status; }
    public getResourcesPath() { return this.resourcesPath; }
    public getModelNames() { return this.modelNames; }
    public getModelSize() { return this.modelSize;}
    public getCanvasId() { return  this.canvasId; }
    public getEyestatus() {return this.eyeStatus; }

}

export const resourcesConfig = new ResourceConfig();

// 外部定義ファイル（json）と合わせる
export const MotionGroupIdle = 'Idle'; // アイドリング
export const MotionGroupTapBody = 'TapBody'; // 体をタップしたとき

// 外部定義ファイル（json）と合わせる
export const HitAreaNameHead = 'Head';
export const HitAreaNameBody = 'Body';

// モーションの優先度定数
export const PriorityNone = 0;
export const PriorityIdle = 1;
export const PriorityNormal = 2;
export const PriorityForce = 3;

// デバッグ用ログの表示オプション
export const DebugLogEnable = true;
export const DebugTouchLogEnable = true;

// Frameworkから出力するログのレベル設定
export const CubismLoggingLevel: LogLevel = LogLevel.LogLevel_Verbose;

// 默认的渲染目标大小
export const RenderTargetWidth = 1900;
export const RenderTargetHeight = 1000;
