# Day_03

## Redis Commands

---

1. Subscribe to a channel:

   ```redis
   SUBSRIBE channel
   ```

2. PUBLISH MESSAGE TO CHANNEL:

   ```
   PUBLISH CHANNEL 'MESSAGE'
   ```

3. Subscribe to a channel using a pattern:

   ```
   PSUBSCRIBE PATTERN
   ```

4. Unsubscribe a channel:

   ```
   UNSUBSCRIBE channel
   ```

5. UnSubscribe a channel using a pattern:

   ```
   PUNSUBSCRIBE pattern
   ```

6. Create a stream(manual id):

   ```
   XADD key id field value
   ```

7. Create a stream(auto id):

   ```
   XADD key * field value
   ```

8. Create a stream with maxlen:

   ```
   XADD key maxlen 1000 * field value
   ```

9. Read X number of data from stream:

   ```
   XREAD COUNT x STREAMS key start_index
   ```

10. Close stream after waiting:

    ```
    XREAD BLOCK wait_time STREAMS streeam_key id
    ```

11. Close stream after waiting in realtime:

    ```
    XREAD BLOCK wait_time STREAMS stream_key $
    ```

12. Print data in stream in a given range:

    ```
    XRANGE stream_key start end
    ```

13. Print data in stream in a given range with limited count:

    ```
    XRANGE stream_key start end COUNT count_val
    ```

14. Print data in stream in a given range without knowing ids:

    ```
    XRANGE stream_key - + COUNT count_val
    ```

15. Print data in stream in a given range in reverse:

    ```
    XREVRANGE stream_key start end
    ```

16. Print data in stream in a given range in reverse without knowing ids:

    ```
    XREVRANGE stream_key + - COUNT count_val
    ```
