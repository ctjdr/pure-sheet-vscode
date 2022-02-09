/**
 * Copyright (C) con terra GmbH
 */
package demo;

public abstract class TestBase {

    public abstract String something();

    public static final class Logger {
        public void info(String log) {}
        }
    }
}
