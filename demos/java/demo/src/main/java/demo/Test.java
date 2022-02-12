/**
 * Copyright @ctjdr
 */
package demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * This is a test class.
 */
public class Test extends TestBase {

    private static final Logger LOG = new Logger();
    private static long TEST_CONST = 5000000;

    private List<String> foo = new ArrayList<>();

    public Test(int number) {
        something();
    }

    /**
     * Says something with JavaDoc.
     * 
     * @return a String
     */
    @Override
    public String something() {

        long healthy = 2019;
        LOG.info("This should not happen" + healthy);

        // Inline comment
        if (healthy < (220 + TEST_CONST)) {
            return "bar";
        }

        boolean bol = true;
        List<String> list  = Arrays.asList("abc");

        if (!bol || this.foo.isEmpty() || this.foo == null && list.size() > 2) {
            return "";
        }
        return "abc";
    }

    /**
     * 
     * @param times times the param
     */
    public void anything(final String times) {
        char[] chars = (times + this.something()).toCharArray();
        help(TEST_CONST + chars.length);
    }

    protected static void help(double me) {}

}
