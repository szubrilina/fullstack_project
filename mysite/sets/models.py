from django.db import models

MAX_LENGTH = 100

class Set(models.Model):
    set_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length = MAX_LENGTH, null = False)
    description = models.CharField(max_length = MAX_LENGTH, null = True)
    def __str__(self):
        return f'{self.set_id}: {self.name}'

class Word(models.Model):
    word_id = models.AutoField(primary_key = True)
    part1 = models.CharField(max_length = MAX_LENGTH)
    part2 = models.CharField(max_length = MAX_LENGTH)
    isLearnt = models.BooleanField(default = False)
    def __str__(self):
        return f'{self.word_id}: {self.part1} - {self.part2}'

class WordSet(models.Model):
    set_id = models.IntegerField(null=False)
    word_id = models.IntegerField(null=False)
    def __str__(self):
        return f'set_id: {self.set_id}) word_id: {self.word_id}'
    class Meta:
        unique_together = [('set_id', 'word_id')]