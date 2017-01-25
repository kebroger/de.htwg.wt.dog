
name := "de-htwg-wt-dog"

version := "1.0"

lazy val `de-htwg-wt-dog` = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq( javaJdbc ,  cache , javaWs )

libraryDependencies ++= Seq(
  javaCore,  // The core Java API
  "org.webjars" % "bootstrap" % "2.3.1",
  "log4j" % "log4j" % "1.2.17",
  "com.google.inject" % "guice" % "3.0"
)

includeFilter in (Assets, LessKeys.less) := "index.less" | "main.less"
