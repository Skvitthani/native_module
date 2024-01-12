#import "NativeModule.h"
#import <React/RCTLog.h>

@implementation NativeModuleCall

RCT_EXPORT_MODULE(NativeModuleCall);

- (NSArray<NSString *> *)supportedEvents {
  return @[@"EventReminder"];
}

RCT_EXPORT_METHOD(createNativeEvent:(NSString *)name
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    if (name) {
        resolve(name);
        [self sendEventWithName:@"EventReminder" body:@{@"name": name}];
        RCTLogInfo(@"Pretending to create an event %@", name);
    } else {
        reject(@"event_failure", @"no event id returned", nil);
    }
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
{
    return [[UIDevice currentDevice] name];
}

@end
