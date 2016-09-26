REM (Starts Client)

REM (Shows Only Outputs)
  @ECHO OFF
  CLS

REM (Creates a HTTP Server to Run the Client)
  http-server -o

  REM (If Http-Server Does Not Exist Start Client With File Protocol)
  IF %ERRORLEVEL%==9009 (
    CLS

    START index.html

    ECHO May Not Work Correctly Due to File Protocol
  )

PAUSE
EXIT
