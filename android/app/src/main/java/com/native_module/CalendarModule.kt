package com.native_module
import android.graphics.Color
import android.graphics.drawable.GradientDrawable
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.view.Gravity
import android.widget.TextView
import android.widget.Toast


class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "CalendarModule"

    @ReactMethod(isBlockingSynchronousMethod = true) fun createCalendarEvent(name: String, backgroundColor: String,textColor : String) {
        // Adjust margin top
        val yOffset = 50

        // Create a TextView for the Toast message
        val toastTextView = TextView(reactApplicationContext)
        toastTextView.text = name
        toastTextView.setPadding(20,20,20,20)


        val gradientDrawable = GradientDrawable()
        // Set background color
        gradientDrawable.setColor(Color.parseColor(backgroundColor))
        // Adjust this value for the desired border radius
        val cornerRadius = 20f
        gradientDrawable.cornerRadius = cornerRadius

        // Set the drawable as the background of the TextView
        toastTextView.setBackground(gradientDrawable)

        // Set text color
        toastTextView.setTextColor(Color.parseColor(textColor))

        // Create and show the custom Toast
        val myToast = Toast(reactApplicationContext)
        myToast.view = toastTextView
        myToast.setGravity(Gravity.TOP, 0, yOffset)
        myToast.duration = Toast.LENGTH_SHORT
        myToast.show()
    }

}