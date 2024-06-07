//
//  RNEventEmitter.swift
//  native_module
//
//  Created by mac on 07/06/24.
//

import React

@objc(RNEventEmitter)
open class RNEventEmitter : RCTEventEmitter{
  
  public static var emitter:RCTEventEmitter!
  
  override  init() {
    super.init()
    RNEventEmitter.emitter = self
  }
  
  open override func supportedEvents() -> [String]! {
    ["onReady","onPending","onFailure"]
  }
}
