package com.example.user.message;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.ViewGroup;
import android.webkit.JavascriptInterface;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.AbsoluteLayout;
import android.widget.LinearLayout;
import android.widget.Toast;

public class Main extends AppCompatActivity {
    String temp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final Context ctx = Main.this;


        LinearLayout frame = new LinearLayout(ctx);
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        frame.setLayoutParams(params);


        WebView webView = new WebView(ctx);
        webView.setLayoutParams(params);

        WebSettings settings = webView.getSettings();
        settings.setUseWideViewPort(true);
        settings.setJavaScriptEnabled(true);
        settings.setAllowUniversalAccessFromFileURLs(true);

        webView.setWebChromeClient(new WebChromeClient());
        webView.loadUrl("file:///android_asset/www/html/index.html");
        frame.addView(webView);
        setContentView(frame);

        temp = "";
        webView.addJavascriptInterface(new Object(){
            @JavascriptInterface
            public void toast(String text){
                Toast.makeText(ctx, text,Toast.LENGTH_LONG).show();
            }
            @JavascriptInterface
            public void sendMessage(String msg){
                temp = msg;
                Toast.makeText(ctx, "입력한 메시지 : "+temp, Toast.LENGTH_SHORT).show();
            }
        },"Hybrid");


    }
}
