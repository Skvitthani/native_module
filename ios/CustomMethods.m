//
//  CustomMethods.m
//  native_module
//
//  Created by mac on 07/06/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CustomMethods,NSObject)
RCT_EXTERN_METHOD(MyMethod : (NSString*) param)

@end
